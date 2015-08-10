var geocoder = require('node-geocoder');
var util = require('util');
var BaseLocation = require('./BaseLocation');

util.inherits(GoogleLocation, BaseLocation);

/**
 * Create GM instance
 * @constructor
 */
function GoogleLocation() {
  BaseLocation.apply(this, arguments);

  this.setProvider(geocoder('google', this.get('apiKey') ? 'https' : 'http', this.get()));
}

/**
 * Geocode address and get latitude\longitude for it
 * @param {String} address
 * @returns {Promise}
 */
GoogleLocation.prototype.geocode = function (address) {
  return this.getProvider().geocode(address);
};

/**
 * Reverse geocode to address
 * @param {Number} latitude
 * @param {Number} longitude
 * @returns {Promise}
 */
GoogleLocation.prototype.reverse = function (latitude, longitude) {
  return this.getProvider().reverse({lat: latitude, lon: longitude});
};

module.exports = GoogleLocation;
