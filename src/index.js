import AgolLocation from './AgolLocation';
import DataScienceToolkitLocation from './DataScienceToolkitLocation';
import FreeGeoIpLocation from './FreeGeoIpLocation';
import GeoCodioLocation from './GeoCodioLocation';
import GoogleLocation from './GoogleLocation';
import HereLocation from './HereLocation';
import MapQuestLocation from './MapQuestLocation';
import NominatimMapQuestLocation from './NominatimMapQuestLocation';
import OpenCageLocation from './OpenCageLocation';
import OpenMapQuestLocation from './OpenMapQuestLocation';
import OpenStreetMapLocation from './OpenStreetMapLocation';
import SmartyStreetsLocation from './SmartyStreetsLocation';
import TeleportLocation from './TeleportLocation';
import TomTomLocation from './TomTomLocation';
import YandexLocation from './YandexLocation';

const location = {
  agol: AgolLocation,
  datasciencetoolkit: DataScienceToolkitLocation,
  freegeoip: FreeGeoIpLocation,
  geocodio: GeoCodioLocation,
  google: GoogleLocation,
  here: HereLocation,
  mapquest: MapQuestLocation,
  nominatimmapquest: NominatimMapQuestLocation,
  opencage: OpenCageLocation,
  openmapquest: OpenMapQuestLocation,
  openstreetmap: OpenStreetMapLocation,
  smartystreets: SmartyStreetsLocation,
  teleport: TeleportLocation,
  tomtom: TomTomLocation,
  yandex: YandexLocation
};

/**
 * Create specified location instance
 * @param {String} type
 * @param {Object} [config]
 * @returns {*}
 */
export default function (type, config) {
  if (location[type.toLowerCase()] instanceof Function) {
    return new location[type.toLowerCase()](config);
  } else {
    throw new Error('Unrecognized type -> ' + type);
  }
}
