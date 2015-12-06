function Minimal(){}

Minimal.prototype.min = function (n1,n2) {
  return (n1 === n2) ?
    0 :
    (n1 > n2)?
    n2:
    n1;
};

module.exports = Minimal;
