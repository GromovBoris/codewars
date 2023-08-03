// Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

function balancedParens(n) {
  let k = n * 2;
  let arr = new Array(k).fill(0);
  let answer = [];
  let i = 0;
  let y = 0;

  function getEls(i, y, k, arr) {
    if (i <= k - y - 2) {
      arr[y] = "(";
      getEls(i + 1, y + 1, k, arr);
    }
    if (i > 0) {
      arr[y] = ")";
      getEls(i - 1, y + 1, k, arr);
    }
    if (y === k) {
      if (i === 0) {
        answer.push(arr.join(""));
      }
    }
  }

  getEls(i, y, k, arr);
  console.log(answer);
}

balancedParens(3);
