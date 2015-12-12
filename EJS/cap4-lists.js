function List() {}

List.prototype.arrayToList = function(array) {
  var list = null;
  for (var i = array.length -1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

List.prototype.listToArray = function(list) {
  var array = [];
  for(var i = list; i; i = i.rest){
    array.push(i.value);
  }
  return array;
}

module.exports= List;
