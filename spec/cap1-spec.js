var Triangle = require('../EJS/cap1.js');

describe('Cap 1 of Eloquent JS', function(){
var triangle;
  beforeEach(function(){
    triangle = new Triangle();
  });

  it('should show a #', function(){
    expect('#\n').toBe(triangle.make(1));
  });

  it('should show a triangle with height 3',function(){
    var triangleHeight3 = "#\n##\n###\n";
    expect(triangleHeight3).toBe(triangle.make(3));
  });

  it('should show a triangle with height 7', function(){
    var triangleHeight3 = "#\n##\n###\n####\n#####\n######\n#######\n";
    expect(triangleHeight3).toBe(triangle.make(7));
  })
});
