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
