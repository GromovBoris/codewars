// Consider the number triangle below, in which each number is equal to the number above plus the number to the left.
// If there is no number above, assume it's a 0.

// function solve(n) {
//   let num = Array.from({ length: n }, () => []);
//   num.forEach((el) => el.push(1));
//   for (let i = 1; i < num.length; i++) console.log(num[i]);

//   return num;
// }

// console.log(solve(5));

// function solve(n) {
//   let answer = [];

//   for (let i = 0; i < n; i++) {
//     answer[i] = [];
//     for (let j = 0; j <= i; j++) {
//       if (i === 0 && j === 0) {
//         answer[i][j] = 1;
//       } else {
//         let above = answer[i - 1][j] || 0;
//         let left = answer[i][j - 1] || 0;
//         answer[i][j] = above + left;
//       }
//     }
//   }

//   return BigInt(answer[answer.length - 1].reduce((acc, curr) => acc + curr, 0));
// }

// console.log(solve(620n));

// function allocateRooms(customers) {
//   customers.sort((a, b) => a[0] - b[0]);

//   let rooms = [];

//   return customers.map((customer) => {
//     let allocated = false;
//     for (let i = 0; i < rooms.length; i++) {
//       if (rooms[i] <= customer[0]) {
//         rooms[i] = customer[1];
//         allocated = true;
//         break;
//       }
//     }

//     if (!allocated) {
//       rooms.push(customer[1]);
//     }

//     return rooms.indexOf(customer[1]) + 1;
//   });
// }

// // Пример использования
// let customers = [
//   [1, 5],
//   [2, 4],
//   [6, 8],
//   [7, 7],
// ];
// console.log(allocateRooms(customers));

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof NaN);
console.log(typeof "null");
console.log(typeof 1);
