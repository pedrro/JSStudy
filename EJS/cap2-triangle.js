
function Triangle() {
}

Triangle.prototype.make = function (height) {
  var triangle = '';
  var count = 1;

  for (var i = 1; i <= height;i++) {
    triangle += _repeat('#', i) + '\n';
  }

  return triangle;
};

var _repeat = function (char, index) {
  var result = '';
  for (var i = 0; i < index; i++) {
    result += char;
  }
  return result;
};

module.exports = Triangle;
