function ChessBoard(){}

ChessBoard.prototype.createBoard = function(size){
  var board = '';
  var evenRow = "# # # # ";
  var oddRow = " # # # #";

  for ( var i = 0; i < size; i++ ) {
    if ( i%2 == 0 ) board += '\n'+ evenRow + '\n';
    else board += oddRow;
}
  return board;
}

module.exports = ChessBoard;
