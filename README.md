[![NPM downloads per month][npm-downloads-img]][npm-url]
[![NPM version][npm-version-img]][npm-url]
[![NPM license][npm-license-img]][npm-url]

# Node.js Numbeo API
Node.js lib for the Numbeo API

## Installation
```
npm i --save numbeo-api
```

## Usage
Require the library and initialize it with your account key:

```js
const Numbeo = require('numbeo-api')
api = new Numbeo({ key: 'your-key' })
api.getCities()
.then(({cities}) => {
  console.log(cities)
})
.catch(console.error)
```

## Running Tests
In order to run the tests, the integration tests require to create a `secrets.js` file
from the provided `example.secrets.js` example, and fill it in with a valid access key.

Then just `mocha`.


## License
MIT © Sadoht Gomez Fernandez

[npm-url]: https://npmjs.org/package/numbeo-api
[npm-downloads-img]: https://img.shields.io/npm/dm/numbeo-api.svg
[npm-version-img]: https://badge.fury.io/js/numbeo-api.svg
[npm-license-img]: https://img.shields.io/npm/l/numbeo-api.svg

