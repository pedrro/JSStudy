var ChessBoard = require('../EJS/cap2-chessboard.js');


describe('Exercise - CHESSBOARD - of cap2 of Eloquent JS', function(){
  var chessboard;

  beforeEach(function(){
    chessboard = new ChessBoard();
  });

  it('should return board', function(){
    var chessSize = 2;
    var evenRow = "# # # # ";
    var oddRow = " # # # #";
    var chessResult = '\n' + evenRow + '\n' + oddRow;
    expect(chessboard.createBoard(chessSize)).toEqual(chessResult);
  });
});
