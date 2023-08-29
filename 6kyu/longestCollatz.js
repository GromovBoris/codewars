// There may be more than one answer, i.e. two or more integers produce the longest Collatz sequence,
// because they happen to have sequences of the same length. In this case, your function should return the
// integer that appears first in the array.

function longestCollatz(inputArray) {
  let counter,
    answer = {},
    maxkey = 0,
    maxvalue = 0;
  function count(n) {
    counter = 0;
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
      counter++;
    }
    return counter;
  }
  for (i = 0; i < inputArray.length; i++) {
    count(inputArray[i]);
    answer[i] = counter;
  }
  for (let key in answer) {
    if (answer[key] > maxvalue) {
      maxvalue = answer[key];
      maxkey = key;
    }
  }
  console.log(inputArray[maxkey]);
}
