function FizzBuzz(){

}

FizzBuzz.prototype.showFizz = function(num){
  if(num % 3 === 0){
    return 'Fizz';
  }
}

FizzBuzz.prototype.showBuzz = function(num){
  if(num % 5 === 0){
    return 'Buzz';
  }
}

FizzBuzz.prototype.showFizzBuzz = function(num){
  if(num % 3 === 0 && num % 5 === 0){
    return 'FizzBuzz';
  }
}



module.exports = FizzBuzz;
