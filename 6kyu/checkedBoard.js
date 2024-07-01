// Write a function which takes one parameter representing the dimensions of a checkered board.
// The board will always be square, so 5 means you will need a 5x5 board.

// The dark squares will be represented by a unicode white square, while the light squares will
//  be represented by a unicode black square (the opposite colours ensure the board doesn't look
//      reversed on code wars' dark background). It should return a string of the board with a
//      space in between each square and taking into account new lines.

// An even number should return a board that begins with a dark square. An odd number should
// return a board that begins with a light square.

function checkeredBoard(n) {
  let firstChar = n % 2 === 0;
  let answer = "";
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 === 0) {
        str += firstChar ? "\u25A0 " : "\u25A1 ";
      } else {
        str += firstChar ? "\u25A1 " : "\u25A0 ";
      }
    }
    let str2 = str.trim();
    answer += str2 + "\n";
  }
  // console.log(answer.length);
  return answer.trim();
}

console.log(checkeredBoard(4));
