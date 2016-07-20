/*
Chess Board

Write a program that creates a string that represents an 8×8 grid, using
new-line characters to separate lines. At each position of the grid there is
either a space or a “#” character. The characters should form a chess board.
Passing this string to console.log should show something like this:

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

When you have a program that generates this pattern, defne a variable size = 8
and change the program so that it works for any size, outputting a grid of the
given width and height.
*/

var size = 8;
var chessBoard = '';
for (var i = 0; i < size; i++) {
  var line = '';
  for (var j = 0; j < size; j++) {
    // even line
    if (i % 2 === 0) {
      if (j % 2 === 0) {
        line += '#';
      } else {
        line += ' ';
      }
    // odd line
    } else {
      if (j % 2 === 0) {
        line += ' ';
      } else {
        line += '#';
      }
    }
  }
  chessBoard += line + '\n';
}
console.log(chessBoard);
