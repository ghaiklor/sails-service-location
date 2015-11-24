import geocoder from 'node-geocoder';
import BaseLocation from './BaseLocation';

export default class YandexLocation extends BaseLocation {
  constructor(config) {
    super(config);

    this.setProvider(geocoder('yandex', 'http', this.get()));
  }

  /**
   * Geocode address and get latitude\longitude for it
   * @param {String} address
   * @returns {Promise}
   */
  geocode(address) {
    return this.getProvider().geocode(address);
  }

  /**
   * Reverse geocode to address
   * @param {Number} latitude
   * @param {Number} longitude
   * @returns {Promise}
   */
  reverse(latitude, longitude) {
    return this.getProvider().reverse({lat: latitude, lon: longitude});
  }
}
