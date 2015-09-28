var geocoder = require('node-geocoder');
var util = require('util');
var BaseLocation = require('./BaseLocation');

util.inherits(NominatimMapQuestLocation, BaseLocation);

/**
 * Create GM instance
 * @constructor
 */
function NominatimMapQuestLocation() {
  BaseLocation.apply(this, arguments);

  this.setProvider(geocoder('nominatimmapquest', 'http', this.get()));
}

/**
 * Geocode address and get latitude\longitude for it
 * @param {String} address
 * @returns {Promise}
 */
NominatimMapQuestLocation.prototype.geocode = function (address) {
  return this.getProvider().geocode(address);
};

/**
 * Reverse geocode to address
 * @param {Number} latitude
 * @param {Number} longitude
 * @returns {Promise}
 */
NominatimMapQuestLocation.prototype.reverse = function (latitude, longitude) {
  return this.getProvider().reverse({lat: latitude, lon: longitude});
};

module.exports = NominatimMapQuestLocation;
