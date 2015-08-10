var assert = require('chai').assert;
var LocationService = require('../../');

describe('LocationService', function () {
  it('Should properly export', function () {
    assert.isObject(LocationService);
    assert.isFunction(LocationService.create);
  });

  it('Should properly create location instances', function () {
  });

  it('Should properly throw error on unrecognized type', function () {
    assert.throws(function () {
      LocationService.create('NOT_EXISTS');
    }, Error);
  });
});
