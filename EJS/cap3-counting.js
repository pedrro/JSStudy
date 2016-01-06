function Counting() {}

Counting.prototype.countBs = function (word) {
  var bs = 0;
  for (var letter in word) {
    if (word.charAt(letter) === 'B') {
      bs++;
    }
  }
  return bs;
};

Counting.prototype.countChar = function (word, char) {
  var bs = 0;
  for (var letter in word) {
    if (word.charAt(letter) === char) {
      bs++;
    }
  }

  return bs;
};

module.exports = Counting;
