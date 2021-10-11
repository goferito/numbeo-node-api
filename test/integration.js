require('should')

const API = require('../')
const secrets = require('./secrets')

describe('Numbeo API', function () {

  // Since network operations are involved, give it some more time
  this.timeout(1000 * 10)


  let api

  before('creates an instance', () => {
    api = new API({
      key: secrets.apiKey,
    })
  })


  it('gets the list of cities', async () => {
    const cities = await api.getCities()
    cities.cities.length.should.be.above(12900)
  })

  it('gets price data for Berlin', async () => {
    const data = await api.getCityPrices('Berlin, Germany')
    data.prices.length.should.be.above(10)
    for (const price of data.prices) {
      if (price.average_price < 0) {
        throw new Error(`Ivalid price for "${price.item_name}"`)
      }
    }
  })

  it('gets city indices for Paris', async () => {
    const data = await api.getIndices('Paris')
    data.name.should.equal('Paris, France')
    Object.keys(data).should.containDeep([
      'name', 'city_id', 'traffic_index', 'climate_index',
      'crime_index', 'pollution_index', 'rent_index',
    ])
  })

  it('gets crime data for Caracas', async () => {
    const data = await api.getCityCrime('Caracas')
    data.name.should.equal('Caracas, Venezuela')
    data.level_of_crime.should.be.within(-2, 2)
    data.safe_alone_night.should.be.within(-2, 2)
    data.index_safety.should.be.within(0, 100)
    data.contributors.should.be.above(100)
  })

  it('gets climate data for Vigo', async () => {
    const data = await api.getCityClimate('Vigo')
    data.name.should.equal('Vigo, Spain')
    Object.keys(data.months).length.should.equal(12)
    data.months['12'].chanceofprecip.should.be.above(10)
    data.months['12'].temp_low_avg.should.be.above(0)
  })

  it('gets pollution data for Madrid', async () => {
    const data = await api.getCityPollution('Madrid')
    data.name.should.equal('Madrid, Spain')
    data.yearLastUpdate.should.be.above(2020)
    data.clean_and_tidy.should.be.within(-2, 2)
  })

  it('gets exchange rates', async () => {
    const data = await api.getCurrencyExchangeRates()
    data.last_update.should.be.above('2021')
    data.exchange_rates.length.should.be.above(10)
  })
})

