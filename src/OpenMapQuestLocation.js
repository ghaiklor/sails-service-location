var geocoder = require('node-geocoder');
var util = require('util');
var BaseLocation = require('./BaseLocation');

util.inherits(OpenMapQuestLocation, BaseLocation);

/**
 * Create GM instance
 * @constructor
 */
function OpenMapQuestLocation() {
  BaseLocation.apply(this, arguments);

  this.setProvider(geocoder('openmapquest', 'http', this.get()));
}

/**
 * Geocode address and get latitude\longitude for it
 * @param {String} address
 * @returns {Promise}
 */
OpenMapQuestLocation.prototype.geocode = function (address) {
  return this.getProvider().geocode(address);
};

/**
 * Reverse geocode to address
 * @param {Number} latitude
 * @param {Number} longitude
 * @returns {Promise}
 */
OpenMapQuestLocation.prototype.reverse = function (latitude, longitude) {
  return this.getProvider().reverse({lat: latitude, lon: longitude});
};

module.exports = OpenMapQuestLocation;
