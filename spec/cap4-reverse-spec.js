var Reverse = require('../EJS/cap4-reverse.js');

describe('Exercise - Reverse - of cap4 of Eloquent JS', function() {
  var reverse;

  beforeEach(function() {
    reverse = new Reverse();
  });

  it('Should reverse an array', function() {
    var arrayToBeReversed = [1,2,3];
    var arrayReversed = [3,2,1];
    expect(reverse.reverseArray(arrayToBeReversed)).toEqual(arrayReversed);
  });

});
