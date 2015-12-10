function Counting(){}

Counting.prototype.countBs = function (word) {
  var bs = 0;
  for(var i = 0; i < word.length; i++){
    if(word.charAt(i) === 'B'){
      bs++;
    }
  }
  return bs;
};

Counting.prototype.countChar = function (word, char){
  var bs = 0;
  for(var i = 0; i < word.length; i++){
    if(word.charAt(i) === char){
      bs++;
    }
  }
  return bs;
};

module.exports = Counting;
