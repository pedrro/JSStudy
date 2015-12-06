function Recursion(){}

Recursion.prototype.isEven = function (num) {
  return (num <= 0) ?
  'less than 0' :
   (num % 2 === 0) ?
    true :
     false;
};

module.exports = Recursion;
