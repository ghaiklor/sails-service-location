import { assert } from 'chai';
import LocationService from '../../src/index';
import AgolLocation from '../../src/AgolLocation';
import DataScienceToolkitLocation from '../../src/DataScienceToolkitLocation';
import FreeGeoIpLocation from '../../src/FreeGeoIpLocation';
import GeoCodioLocation from '../../src/GeoCodioLocation';
import GoogleLocation from '../../src/GoogleLocation';
import HereLocation from '../../src/HereLocation';
import MapQuestLocation from '../../src/MapQuestLocation';
import NominatimMapQuestLocation from '../../src/NominatimMapQuestLocation';
import OpenCageLocation from '../../src/OpenCageLocation';
import OpenMapQuestLocation from '../../src/OpenMapQuestLocation';
import OpenStreetMapLocation from '../../src/OpenStreetMapLocation';
import SmartyStreetsLocation from '../../src/SmartyStreetsLocation';
import TeleportLocation from '../../src/TeleportLocation';
import TomTomLocation from '../../src/TomTomLocation';
import YandexLocation from '../../src/YandexLocation';

const PROVIDER_CONFIG = {
  apiKey: 'test',
  appId: 'test',
  appCode: 'test',
  auth_id: 'test',
  auth_token: 'test',
  client_id: 'test',
  client_secret: 'test'
};

describe('LocationService', () => {
  it('Should properly export', () => {
    assert.isFunction(LocationService);
  });

  it('Should properly create location instances', () => {
    assert.instanceOf(LocationService('Agol', PROVIDER_CONFIG), AgolLocation);
    assert.instanceOf(LocationService('DataScienceToolkit', PROVIDER_CONFIG), DataScienceToolkitLocation);
    assert.instanceOf(LocationService('FreeGeoIp', PROVIDER_CONFIG), FreeGeoIpLocation);
    assert.instanceOf(LocationService('GeoCodio', PROVIDER_CONFIG), GeoCodioLocation);
    assert.instanceOf(LocationService('Google', PROVIDER_CONFIG), GoogleLocation);
    assert.instanceOf(LocationService('Here', PROVIDER_CONFIG), HereLocation);
    assert.instanceOf(LocationService('MapQuest', PROVIDER_CONFIG), MapQuestLocation);
    assert.instanceOf(LocationService('NominatimMapQuest', PROVIDER_CONFIG), NominatimMapQuestLocation);
    assert.instanceOf(LocationService('OpenCage', PROVIDER_CONFIG), OpenCageLocation);
    assert.instanceOf(LocationService('OpenMapQuest', PROVIDER_CONFIG), OpenMapQuestLocation);
    assert.instanceOf(LocationService('OpenStreetMap', PROVIDER_CONFIG), OpenStreetMapLocation);
    assert.instanceOf(LocationService('SmartyStreets', PROVIDER_CONFIG), SmartyStreetsLocation);
    assert.instanceOf(LocationService('Teleport', PROVIDER_CONFIG), TeleportLocation);
    assert.instanceOf(LocationService('TomTom', PROVIDER_CONFIG), TomTomLocation);
    assert.instanceOf(LocationService('Yandex', PROVIDER_CONFIG), YandexLocation);
  });

  it('Should properly throw error on unrecognized type', () => {
    assert.throws(() => LocationService('NOT_EXISTS'), Error);
  });
});
