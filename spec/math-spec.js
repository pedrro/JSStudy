var Math = require('../EJS/math.js');


describe('Exercise - Math', function () {
  var math;

  beforeEach(function () {
    math = new Math();
  });

  it('Should return 1 when factorial is 0', function () {
    expect(math.factorial(0)).toBe(1);
  });

  it('Should return 2 when factorial is 2', function () {
    expect(math.factorial(2)).toBe(2);
  });

  it('Should return 120 when factorial is 5', function () {
    expect(math.factorial(5)).toBe(120);
  });
});
