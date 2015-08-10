var geocoder = require('node-geocoder');
var util = require('util');
var BaseLocation = require('./BaseLocation');

util.inherits(YandexLocation, BaseLocation);

/**
 * Create GM instance
 * @constructor
 */
function YandexLocation() {
  BaseLocation.apply(this, arguments);

  this.setProvider(geocoder('yandex', 'http', this.get()));
}

/**
 * Geocode address and get latitude\longitude for it
 * @param {String} address
 * @returns {Promise}
 */
YandexLocation.prototype.geocode = function (address) {
  return this.getProvider().geocode(address);
};

/**
 * Reverse geocode to address
 * @param {Number} latitude
 * @param {Number} longitude
 * @returns {Promise}
 */
YandexLocation.prototype.reverse = function (latitude, longitude) {
  return this.getProvider().reverse({lat: latitude, lon: longitude});
};

module.exports = YandexLocation;
