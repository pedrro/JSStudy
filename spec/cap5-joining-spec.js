var Join = require("../EJS/cap5-joining.js");

describe('Exercise - Join - Cap 5', function() {
  var join;

  beforeEach(function() {
    join = new Join();
  });

  it('Should concat a array', function() {
    var array= [[1,2,3], [4,5], [6]];
    expect(join.joining(array)).toEqual([1,2,3,4,5,6]);
  });
});
