function Reverse() {}

Reverse.prototype.reverseArray = function(array){
  for(var start=0, end=array.length-1; start<=end;start++,end--){
    var temp = array[start];
    array[start] = array[end];
    array[end] = temp;
  }
  return array;
}

module.exports = Reverse;
