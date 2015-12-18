var Counting = require('../EJS/cap3-counting.js');

describe('Exercise - Counting beans - EJS cap 3', function () {
  var counting;

  beforeEach(function () {
    counting = new Counting();
  });

  it('Should return numbers of B on the word', function () {
    expect(counting.countBs('BBBASBB')).toBe(5);
  });

  it('Should return numbers of C on the word', function () {
    expect(counting.countChar('CCCASBB', 'C')).toBe(3);
  });

});
