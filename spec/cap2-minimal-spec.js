var Minimal = require('../EJS/cap2-minimal.js');

describe('Exercise - Minimal number - of cap2 of Eloquent JS', function () {
  var minimal;

  beforeEach(function () {
  minimal = new Minimal();
  });

  it('Should return 0 when numbers are equals', function(){
    expect(0).toBe(minimal.min(1,1));
  });

  it('Should return min number', function(){
    expect(10).toBe(minimal.min(10,100));
  });

});
