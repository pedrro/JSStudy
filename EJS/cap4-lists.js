function List() {}

List.prototype.arrayToList = function (array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
};

List.prototype.listToArray = function (list) {
  var array = [];
  for (var i = list; i; i = i.rest) {
    array.push(i.value);
  }
  return array;
};

List.prototype.prepend = function (param1, param2) {
  var array = [param1, param2];
  var result = this.arrayToList(array);
  return result;
};

List.prototype.nth = function (list, index) {
  var array = this.listToArray(list);
  return array[index];
};

module.exports = List;
