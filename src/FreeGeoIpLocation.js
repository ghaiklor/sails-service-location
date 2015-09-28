var geocoder = require('node-geocoder');
var util = require('util');
var BaseLocation = require('./BaseLocation');

util.inherits(FreeGeoIpLocation, BaseLocation);

/**
 * Create GM instance
 * @constructor
 */
function FreeGeoIpLocation() {
  BaseLocation.apply(this, arguments);

  this.setProvider(geocoder('freegeoip', 'http', this.get()));
}

/**
 * Geocode address and get latitude\longitude for it
 * @param {String} address
 * @returns {Promise}
 */
FreeGeoIpLocation.prototype.geocode = function (address) {
  return this.getProvider().geocode(address);
};

/**
 * Reverse geocode to address
 * @param {Number} latitude
 * @param {Number} longitude
 * @returns {Promise}
 */
FreeGeoIpLocation.prototype.reverse = function (latitude, longitude) {
  return this.getProvider().reverse({lat: latitude, lon: longitude});
};

module.exports = FreeGeoIpLocation;
