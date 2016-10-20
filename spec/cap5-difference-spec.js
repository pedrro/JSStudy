var Difference = require('../EJS/cap5-difference.js');
var ANCESTRY_FILE = require('../EJS/support/ancestry.js');

describe('Exercise - Mother Child Age Difference', function() {
var difference;

beforeEach(function () {
  difference = new Difference();
});

it('should average age between mothers and children', function () {
  var a = difference.getFamily();
  expect(difference.getAverageMotherAge(a)).toBe(53);
});

});
