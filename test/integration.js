const API = require('../')
const secrets = require('./secrets')

describe('Numbeo API', function () {

  // Since network operations are involved, give it some more time
  this.timeout(1000 * 10)


  let api

  it('creates an instance', () => {
    api = new API({
      key: secrets.apiKey,
    })
  })


  it('gets the list of cities', (done) => {
    api.getCities()
    .then((cities) => {
      cities.cities.length.should.be.above(12900)
      return done()
    })
    .catch(done)
  })

})

