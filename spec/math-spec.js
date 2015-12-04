var Math = require('../EJS/math.js');


describe('Exercise - Math', function(){
  var math;

  beforeEach(function(){
    math = new Math();
  });

  it('Should return 1 when factorial is 0', function(){
    expect(1).toBe(math.factorial(0));
  });

  it('Should return 2 when factorial is 2', function(){
    expect(2).toBe(math.factorial(2));
  });

  it('Should return 120 when factorial is 5', function(){
    expect(120).toBe(math.factorial(5));
  });
});
