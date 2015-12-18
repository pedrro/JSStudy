var FizzBuzz = require('../EJS/cap2-fizzbuzz.js');

describe('Exercise - FIZZBUZZ - of cap2 of Eloquent JS', function () {
  var fizzbuzz;

  beforeEach(function () {
    fizzbuzz = new FizzBuzz();
  });

  it('should show Fizz', function () {
    expect(fizzbuzz.checkFizzBuzz(3)).toBe('Fizz');
  });

  it('should show Buzz', function () {
    expect(fizzbuzz.checkFizzBuzz(5)).toBe('Buzz');
  });

  it('should show FizzBuzz', function () {
    expect(fizzbuzz.checkFizzBuzz(30)).toBe('FizzBuzz');
  });

});
