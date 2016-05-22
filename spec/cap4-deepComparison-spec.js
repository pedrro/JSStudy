var DeepComparison = require("../EJS/cap4-deepComparison.js");

describe('Exercise - Deep Comparison - Cap 4', function () {
  var deepComparison;

  beforeEach(function (){
    deepComparison = new DeepComparison();
  });

  it('should return true to equal objects', function() {
    var obj1 = {here: {is: "an"}, object: 2};
    expect(deepComparison.compare(obj1,obj1)).toBe(true);
  });

  it('should return false to !equal objects', function() {
    var obj1 = {here: {is: "an"}, object: 2};
    expect(deepComparison.compare(obj1,{here: 1, object: 2})).toBe(false);
  });
});
