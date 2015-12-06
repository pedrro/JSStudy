var Minimal = require('../EJS/cap2-minimal.js');

describe('Exercise - Minimal number - of cap2 of Eloquent JS', function () {
  var minimal;

  beforeEach(function () {
  minimal = new Minimal();
  });

  it('Should return 0 when numbers are equals', function(){
    expect(minimal.min(1,1)).toBe(0);
  });

  it('Should return min number', function(){
    expect(minimal.min(10,100)).toBe(10);
  });

});
