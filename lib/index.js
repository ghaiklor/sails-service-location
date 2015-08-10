var locations = {};

module.exports = {
  /**
   * Create specified location instance
   * @param {String} type
   * @param {Object} config
   * @returns {*}
   */
  create: function (type, config) {
    if (locations[type.toLowerCase()] instanceof Function) {
      return new locations[type.toLowerCase()](config);
    } else {
      throw new Error('Unrecognized type -> ' + type);
    }
  }
};
