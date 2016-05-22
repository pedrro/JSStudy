function DeepComparison() {}

DeepComparison.prototype.compare = function(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

module.exports = DeepComparison;
