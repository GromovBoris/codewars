// Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two.
// Both matrices being passed into the function will be of size N x N (square), containing only integers.

function matrixAddition(a, b) {
  let c = Array(a.length)
    .fill()
    .map(() => Array(a.length).fill(0));
  for (let i = 0; i < a.length; i++) {
    for (let y = 0; y < a.length; y++) {
      c[y][i] = a[y][i] + b[y][i];
    }
  }
  console.log(c);
}

matrixAddition(
  [
    [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1],
  ],
  [
    [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3],
  ]
);
