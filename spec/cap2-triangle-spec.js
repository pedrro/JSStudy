var Triangle = require('../EJS/cap2-triangle.js');

describe('Exercise - building a triangle - of cap2 of Eloquent JS', function () {
  var triangle;
  beforeEach(function () {
    triangle = new Triangle();
  });

  it('should show a #', function () {
    expect(triangle.make(1)).toBe('#\n');
  });

  it('should show a triangle with height 3', function () {
    var triangleHeight3 = '#\n##\n###\n';
    expect(triangle.make(3)).toBe(triangleHeight3);
  });

  it('should show a triangle with height 7', function () {
    var triangleHeight7 = '#\n##\n###\n####\n#####\n######\n#######\n';
    expect(triangle.make(7)).toBe(triangleHeight7);
  });
});
