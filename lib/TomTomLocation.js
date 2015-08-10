var geocoder = require('node-geocoder');
var util = require('util');
var BaseLocation = require('./BaseLocation');

util.inherits(TomTomLocation, BaseLocation);

/**
 * Create GM instance
 * @constructor
 */
function TomTomLocation() {
  BaseLocation.apply(this, arguments);

  this.setProvider(geocoder('tomtom', 'http', this.get()));
}

/**
 * Geocode address and get latitude\longitude for it
 * @param {String} address
 * @returns {Promise}
 */
TomTomLocation.prototype.geocode = function (address) {
  return this.getProvider().geocode(address);
};

/**
 * Reverse geocode to address
 * @param {Number} latitude
 * @param {Number} longitude
 * @returns {Promise}
 */
TomTomLocation.prototype.reverse = function (latitude, longitude) {
  return this.getProvider().reverse({lat: latitude, lon: longitude});
};

module.exports = TomTomLocation;
