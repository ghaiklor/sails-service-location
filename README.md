# sails-service-location

![Build Status](https://img.shields.io/travis/ghaiklor/sails-service-location.svg) ![Coverage](https://img.shields.io/coveralls/ghaiklor/sails-service-location.svg) ![Downloads](https://img.shields.io/npm/dm/sails-service-location.svg) ![npm version](https://img.shields.io/npm/v/sails-service-location.svg) ![dependencies](https://img.shields.io/david/ghaiklor/sails-service-location.svg) ![dev dependencies](https://img.shields.io/david/dev/ghaiklor/sails-service-location.svg) ![License](https://img.shields.io/npm/l/sails-service-location.svg)

Service for Sails framework with Location features.

## List of supported location providers

- Google
- FreeGeoIP
- DataScienceToolkit
- OpenStreetMap
- MapQuest
- OpenMapQuest
- Agol
- TomTom
- NominatimMapQuest
- OpenCage
- SmartyStreets
- GeoCodio
- Yandex

## Getting Started

Install this module.

```shell
npm install sails-service-location
```

Then require it in your service.

```javascript
// api/services/LocationService.js
module.exports = require('sails-service-location');
```

That's it, you can create location instances for your needs in your project.

```javascript
// api/controllers/LocationController.js
var location = LocationService.create('google', {
  apiKey: '<GOOGLE_API_KEY>'
});

module.exports = {
  address: function(req, res) {
    google
      .geocode(req.param('address'))
      .then(res.ok)
      .catch(res.serverError);
  }
};
```

## API

Each of location instances has following methods:

### geocode(address)

Get latitude and longitude of specific address. Returns Promise.

`address` - {String} Address that you want to convert to geocode

### reverse(latitude, longitude)

Get address representation from latitude and longitude. Returns Promise.

`latitude` - {Number} Latitude in coordinates

`longitude` - {Number} Longitude in coordinates

## Examples

### Get latitude and longitude of address

```javascript
var location = LocationService.create('google', {
  apiKey: '<GOOGLE_API_KEY>'
});

location
  .geocode('Kirovohrad, Ukraine')
  .then(console.log.bind(console))
  .catch(console.error.bind(console));
```

### Get address from latitude and longitude

```javascript
var location = LocationService.create('google', {
  apiKey: '<GOOGLE_API_KEY>'
});

location
  .reverse(0, 0)
  .then(console.log.bind(console))
  .catch(console.error.bind(console));
```

## License

The MIT License (MIT)

Copyright (c) 2015 Eugene Obrezkov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
