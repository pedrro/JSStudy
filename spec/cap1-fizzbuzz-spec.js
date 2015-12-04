var FizzBuzz = require('../EJS/cap1-fizzbuzz.js');

describe('Exercise - FIZZBUZZ - of cap1 of Eloquent JS', function () {
  var fizzbuzz;

  beforeEach(function () {
  fizzbuzz = new FizzBuzz();
});

  it('should show Fizz', function () {
  expect('Fizz').toBe(fizzbuzz.checkFizzBuzz(3));
});

  it('should show Buzz', function () {
  expect('Buzz').toBe(fizzbuzz.checkFizzBuzz(5));
});

  it('should show FizzBuzz', function () {
  expect('FizzBuzz').toBe(fizzbuzz.checkFizzBuzz(30));
});

});
