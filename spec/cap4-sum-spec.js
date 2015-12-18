var Sum = require('../EJS/cap4-sum.js');

describe('Exercise - Range - of cap4 of Eloquent JS', function () {
  var sum;

  beforeEach(function () {
    sum = new Sum();
  });

  it('Should return an array', function () {
    var arrayResult = [1, 2, 3];
    expect(sum.range(1, 3)).toEqual(arrayResult);
  });

  it('Should sum values from array', function () {
    expect(sum.sumArray(sum.range(1, 3))).toBe(12);
  });
});
