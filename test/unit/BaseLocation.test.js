import { assert } from 'chai';
import BaseLocation from '../../src/BaseLocation';

describe('BaseLocation', () => {
  it('Should properly export', () => {
    assert.isFunction(BaseLocation);
  });

  it('Should properly make objects configurable', () => {
    let location = new BaseLocation();

    assert.notOk(location.get('foo'));
    assert.instanceOf(location.set('foo', 'bar'), BaseLocation);
    assert.instanceOf(location.set('obj', {foo: 'bar'}), BaseLocation);
    assert.deepEqual(location.get(), {foo: 'bar', obj: {foo: 'bar'}});
    assert.deepEqual(location.get('obj'), {foo: 'bar'});
    assert.equal(location.get('obj.foo'), 'bar');
    assert.equal(location.get('foo'), 'bar');
  });

  it('Should properly create location instance with pre-defined config', () => {
    let location = new BaseLocation({
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

  it('Should properly get/set provider', () => {
    let location = new BaseLocation();

    assert.deepEqual(location.getProvider(), {});
    assert.instanceOf(location.setProvider('PROVIDER'), BaseLocation);
    assert.equal(location.getProvider(), 'PROVIDER');
  });
});
