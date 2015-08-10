var assert = require('chai').assert;
var BaseLocation = require('../../lib/BaseLocation');

describe('BaseLocation', function () {
  it('Should properly export', function () {
    assert.isFunction(BaseLocation);
    assert.isFunction(BaseLocation.prototype.get);
    assert.isFunction(BaseLocation.prototype.set);
    assert.isFunction(BaseLocation.prototype.getProvider);
    assert.isFunction(BaseLocation.prototype.setProvider);
    assert.isFunction(BaseLocation.prototype.geocode);
    assert.isFunction(BaseLocation.prototype.reverse);
  });

  it('Should properly make objects configurable', function () {
    var location = new BaseLocation();

    assert.notOk(location.get('foo'));
    assert.instanceOf(location.set('foo', 'bar'), BaseLocation);
    assert.instanceOf(location.set('obj', {foo: 'bar'}), BaseLocation);
    assert.deepEqual(location.get(), {foo: 'bar', obj: {foo: 'bar'}});
    assert.deepEqual(location.get('obj'), {foo: 'bar'});
    assert.equal(location.get('obj.foo'), 'bar');
    assert.equal(location.get('foo'), 'bar');
  });

  it('Should properly create location instance with pre-defined config', function () {
    var location = new BaseLocation({
      foo: 'bar',
      obj: {
        foo: 'bar'
      }
    });

    assert.equal(location.get('foo'), 'bar');
    assert.equal(location.get('obj.foo'), 'bar');
    assert.deepEqual(location.get('obj'), {foo: 'bar'});
    assert.notOk(location.get('NOT_EXISTS'));
  });

  it('Should properly get/set provider', function () {
    var location = new BaseLocation();

    assert.notOk(location.getProvider());
    assert.instanceOf(location.setProvider('PROVIDER'), BaseLocation);
    assert.equal(location.getProvider(), 'PROVIDER');
  });
});
