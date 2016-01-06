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
  for (var index in array) {
    sum += array[index];
  }
  return sum;
};

module.exports = Sum;
