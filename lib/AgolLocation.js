var geocoder = require('node-geocoder');
var util = require('util');
var BaseLocation = require('./BaseLocation');

util.inherits(AgolLocation, BaseLocation);

/**
 * Create GM instance
 * @constructor
 */
function AgolLocation() {
  BaseLocation.apply(this, arguments);

  this.setProvider(geocoder('agol', 'http', this.get()));
}

/**
 * Geocode address and get latitude\longitude for it
 * @param {String} address
 * @returns {Promise}
 */
AgolLocation.prototype.geocode = function (address) {
  return this.getProvider().geocode(address);
};

/**
 * Reverse geocode to address
 * @param {Number} latitude
 * @param {Number} longitude
 * @returns {Promise}
 */
AgolLocation.prototype.reverse = function (latitude, longitude) {
  return this.getProvider().reverse({lat: latitude, lon: longitude});
};

module.exports = AgolLocation;
