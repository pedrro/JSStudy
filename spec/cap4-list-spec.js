var List = require('../EJS/cap4-lists.js');

describe('Exercise - Lists - of cap4 of Eloquent JS', function() {
  var list;

  beforeEach(function() {
    list = new List();
  });

  it('Should transform an array to list', function() {
    var arrayToBeTransformed = [1,2,3];
    var listTransformed = {value: 1, rest:
                            {value: 2, rest:
                            {value: 3, rest: null}}};
    expect(list.arrayToList(arrayToBeTransformed))
    .toEqual(listTransformed);
  });

  it('Should transform a list to array', function() {
    var listToBeTransformed = {value: 1, rest:
                            {value: 2, rest:
                            {value: 3, rest: null}}};
    var arrayTransformed = [1,2,3];
    expect(list.listToArray(listToBeTransformed))
    .toEqual(arrayTransformed);
  });

  it('Should return a new list using function prepend',function() {
    var param1 = 1;
    var param2 = 2;
    var listResult = {value:1, rest:{value: 2, rest:null}};
    expect(list.prepend(1,2)).toEqual(listResult);
  });

  it('Should return the value of index in list', function() {
    var listParam = {value: 1, rest:
               {value: 2, rest:
               {value: 3, rest: null}}};
    expect(list.nth(listParam,1)).toBe(2);
  });

});
