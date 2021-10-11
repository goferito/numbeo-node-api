const request = require('axios')

class NumbeoAPI {

  constructor ({key}) {
    this.key = key
    this.baseUrl = 'https://www.numbeo.com/api'
  }

  request (url) {
    return new Promise((resolve, reject) => {
      request.get(url)
      .then(({data}) => data.error ? reject(data) : resolve(data))
      .catch(reject)
    })
  }

  getCities () {
    const path = `/cities?api_key=${this.key}`
    return this.request(this.baseUrl + path)
  }

  getCityPrices (city) {
    const path = `/city_prices?api_key=${this.key}&query=${city}`
    return this.request(this.baseUrl + path)
  }

  getIndices (city) {
    const path = `/indices?api_key=${this.key}&query=${city}`
    return this.request(this.baseUrl + path)
  }

  getCityCrime (city) {
    const path = `/city_crime?api_key=${this.key}&query=${city}`
    return this.request(this.baseUrl + path)
  }

  getCityClimate (city) {
    const path = `/city_climate?api_key=${this.key}&query=${city}`
    return this.request(this.baseUrl + path)
  }

  getCityPollution (city) {
    const path = `/city_pollution?api_key=${this.key}&query=${city}`
    return this.request(this.baseUrl + path)
  }

  getCurrencyExchangeRates () {
    const path = `/currency_exchange_rates?api_key=${this.key}`
    return this.request(this.baseUrl + path)
  }
}

module.exports = NumbeoAPI

