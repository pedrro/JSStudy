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
  })

});
