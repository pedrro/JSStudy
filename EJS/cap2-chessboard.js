function ChessBoard() {}

ChessBoard.prototype.createBoard = function (size) {
  var board = '';
  var evenRow = '# # # # ';
  var oddRow = ' # # # #';

  for ( var i = 0; i < size; i++ ) {
    board += (i % 2 === 0 ) ?
      '\n' + evenRow + '\n' :
       oddRow;
  }
  return board;
};

module.exports = ChessBoard;
