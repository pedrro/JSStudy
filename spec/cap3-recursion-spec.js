var Recursion = require('../EJS/cap3-recursion.js');

describe('Exercise - Recursion - of cap3 of Eloquent JS', function(){
var recursion;

 beforeEach(function(){
   recursion = new Recursion();
 });

 it('Should return message when is less than 0', function(){
   expect(recursion.isEven(-1)).toBe('less than 0');
 });

 it('Should return true if number is pair', function(){
   expect(recursion.isEven(4)).toBe(true);
 })

 it('Should return false if number is not pair', function(){
   expect(recursion.isEven(3)).toBe(false);
 })

});
