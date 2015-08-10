var assert = require('chai').assert;
var sinon = require('sinon');
var Promise = require('bluebird');
var GoogleLocation = require('../../lib/GoogleLocation');
var geocode = require('../fixtures/geocode.json');

var PROVIDER_CONFIG = {};

describe('GoogleLocation', function () {
  it('Should properly export', function () {
    assert.isFunction(GoogleLocation);
  });

  it('Should properly geocode address', function (done) {
    var location = new GoogleLocation(PROVIDER_CONFIG);

    sinon.stub(location.getProvider(), 'geocode', function (address) {
      return Promise.resolve(geocode);
    });

    location
      .geocode('Kirovohrad, Ukraine')
      .then(function (result) {
        assert.deepEqual(result, geocode);
        assert.ok(location.getProvider().geocode.calledOnce);
        assert.equal(location.getProvider().geocode.getCall(0).args[0], 'Kirovohrad, Ukraine');

        location.getProvider().geocode.restore();

        done();
      })
      .catch(done);
  });

  it('Should properly reverse latitude/longitude', function (done) {
    var location = new GoogleLocation(PROVIDER_CONFIG);

    sinon.stub(location.getProvider(), 'reverse', function (latitude, longitude) {
      return Promise.resolve('Kirovohrad, Ukraine');
    });

    location
      .reverse(48.5131978440005, 32.25969628100046)
      .then(function (result) {
        assert.equal(result, 'Kirovohrad, Ukraine');
        assert.ok(location.getProvider().reverse.calledOnce);
        assert.deepEqual(location.getProvider().reverse.getCall(0).args[0], {
          lat: 48.5131978440005,
          lon: 32.25969628100046
        });

        location.getProvider().reverse.restore();

        done();
      })
      .catch(done);
  });
});
