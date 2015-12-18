function Sum() {}
var numbers = [];

Sum.prototype.range = function (start, end) {
  for (var i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
};

Sum.prototype.sumArray = function (array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

module.exports = Sum;
