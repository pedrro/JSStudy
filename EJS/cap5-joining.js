function Join() {}

Join.prototype.joining = function(array) {
 array = array.reduce(function(a, b) {
  return a.concat(b);
 });

 return array;
};

module.exports = Join;
