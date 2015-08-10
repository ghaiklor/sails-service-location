var _ = require('lodash');

/**
 * Create base instance for location service
 * @param {Object} [_config]
 * @constructor
 */
function BaseLocation(_config) {
  this._config = {};

  _.forOwn(_config, function (value, key) {
    this.set(key, value);
  }.bind(this));
}

/**
 * Get configuration value
 * @param {String} [path]
 * @returns {*}
 */
BaseLocation.prototype.get = function (path) {
  return typeof path === 'undefined' ? this._config : _.get(this._config, path);
};

/**
 * Set configuration value
 * @param {String} path
 * @param {*} value
 * @returns {BaseLocation}
 */
BaseLocation.prototype.set = function (path, value) {
  _.set(this._config, path, value);
  return this;
};

/**
 * Get location provider
 * @returns {*}
 */
BaseLocation.prototype.getProvider = function () {
  return this._provider;
};

/**
 * Set new provider
 * @param {*} provider
 * @returns {BaseLocation}
 */
BaseLocation.prototype.setProvider = function (provider) {
  this._provider = provider;
  return this;
};

BaseLocation.prototype.geocode = _;
BaseLocation.prototype.reverse = _;

module.exports = BaseLocation;
