import { assert } from 'chai';
import sinon from 'sinon';
import OpenMapQuestLocation from '../../src/OpenMapQuestLocation';
import geocode from '../fixtures/geocode.json';

const PROVIDER_CONFIG = {
  apiKey: 'test'
};

describe('OpenMapQuestLocation', () => {
  it('Should properly export', () => {
    assert.isFunction(OpenMapQuestLocation);
  });

  it('Should properly geocode address', done => {
    let location = new OpenMapQuestLocation(PROVIDER_CONFIG);

    sinon.stub(location.getProvider(), 'geocode', address => Promise.resolve(geocode));

    location
      .geocode('Kirovohrad, Ukraine')
      .then(result => {
        assert.deepEqual(result, geocode);
        assert.ok(location.getProvider().geocode.calledOnce);
        assert.equal(location.getProvider().geocode.getCall(0).args[0], 'Kirovohrad, Ukraine');

        location.getProvider().geocode.restore();

        done();
      })
      .catch(done);
  });

  it('Should properly reverse latitude/longitude', done => {
    let location = new OpenMapQuestLocation(PROVIDER_CONFIG);

    sinon.stub(location.getProvider(), 'reverse', (latitude, longitude) => Promise.resolve('Kirovohrad, Ukraine'));

    location
      .reverse(48.5131978440005, 32.25969628100046)
      .then(result => {
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
