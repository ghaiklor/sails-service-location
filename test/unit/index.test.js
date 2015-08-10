var assert = require('chai').assert;
var LocationService = require('../../');
var AgolLocation = LocationService.AgolLocation;
var DataScienceToolkitLocation = LocationService.DataScienceToolkitLocation;
var FreeGeoIpLocation = LocationService.FreeGeoIpLocation;
var GeoCodioLocation = LocationService.GeoCodioLocation;
var GoogleLocation = LocationService.GoogleLocation;
var MapQuestLocation = LocationService.MapQuestLocation;
var NominatimMapQuestLocation = LocationService.NominatimMapQuestLocation;
var OpenCageLocation = LocationService.OpenCageLocation;
var OpenMapQuestLocation = LocationService.OpenMapQuestLocation;
var OpenStreetMapLocation = LocationService.OpenStreetMapLocation;
var SmartyStreetsLocation = LocationService.SmartyStreetsLocation;
var TomTomLocation = LocationService.TomTomLocation;
var YandexLocation = LocationService.YandexLocation;

var PROVIDER_CONFIG = {
  client_id: 'test',
  client_secret: 'test',
  apiKey: 'test',
  auth_id: 'test',
  auth_token: 'test'
};

describe('LocationService', function () {
  it('Should properly export', function () {
    assert.isObject(LocationService);
    assert.isFunction(LocationService.create);
  });

  it('Should properly create location instances', function () {
    assert.instanceOf(LocationService.create('Agol', PROVIDER_CONFIG), AgolLocation);
    assert.instanceOf(LocationService.create('DataScienceToolkit', PROVIDER_CONFIG), DataScienceToolkitLocation);
    assert.instanceOf(LocationService.create('FreeGeoIp', PROVIDER_CONFIG), FreeGeoIpLocation);
    assert.instanceOf(LocationService.create('GeoCodio', PROVIDER_CONFIG), GeoCodioLocation);
    assert.instanceOf(LocationService.create('Google', PROVIDER_CONFIG), GoogleLocation);
    assert.instanceOf(LocationService.create('MapQuest', PROVIDER_CONFIG), MapQuestLocation);
    assert.instanceOf(LocationService.create('NominatimMapQuest', PROVIDER_CONFIG), NominatimMapQuestLocation);
    assert.instanceOf(LocationService.create('OpenCage', PROVIDER_CONFIG), OpenCageLocation);
    assert.instanceOf(LocationService.create('OpenMapQuest', PROVIDER_CONFIG), OpenMapQuestLocation);
    assert.instanceOf(LocationService.create('OpenStreetMap', PROVIDER_CONFIG), OpenStreetMapLocation);
    assert.instanceOf(LocationService.create('SmartyStreets', PROVIDER_CONFIG), SmartyStreetsLocation);
    assert.instanceOf(LocationService.create('TomTom', PROVIDER_CONFIG), TomTomLocation);
    assert.instanceOf(LocationService.create('Yandex', PROVIDER_CONFIG), YandexLocation);
  });

  it('Should properly throw error on unrecognized type', function () {
    assert.throws(function () {
      LocationService.create('NOT_EXISTS');
    }, Error);
  });
});
