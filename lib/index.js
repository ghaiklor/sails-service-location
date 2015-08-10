var locations = {
  agol: require('./AgolLocation'),
  datasciencetoolkit: require('./DataScienceToolkitLocation'),
  freegeoip: require('./FreeGeoIpLocation'),
  geocodio: require('./GeoCodioLocation'),
  google: require('./GoogleLocation'),
  mapquest: require('./MapQuestLocation'),
  nominatimmapquest: require('./NominatimMapQuestLocation'),
  opencage: require('./OpenCageLocation'),
  openmapquest: require('./OpenMapQuestLocation'),
  openstreetmap: require('./OpenStreetMapLocation'),
  smartystreets: require('./SmartyStreetsLocation'),
  tomtom: require('./TomTomLocation'),
  yandex: require('./YandexLocation')
};

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
  },

  AgolLocation: locations.agol,
  DataScienceToolkitLocation: locations.datasciencetoolkit,
  FreeGeoIpLocation: locations.freegeoip,
  GeoCodioLocation: locations.geocodio,
  GoogleLocation: locations.google,
  MapQuestLocation: locations.mapquest,
  NominatimMapQuestLocation: locations.nominatimmapquest,
  OpenCageLocation: locations.opencage,
  OpenMapQuestLocation: locations.openmapquest,
  OpenStreetMapLocation: locations.openstreetmap,
  SmartyStreetsLocation: locations.smartystreets,
  TomTomLocation: locations.tomtom,
  YandexLocation: locations.yandex
};
