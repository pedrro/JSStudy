function Math(){}

Math.prototype.factorial = function(num){
  return (num <= 1 ) ? 1 : num * (this.factorial(num-1));
};

module.exports = Math;
