// Grouping integers into a nested list
// In this kata the task is to take a list of integers and a key, and group the list according to a simple rule: ints greater than or equal to the key, and ints less than the key.
// You are to return a nested list. If the list is empty, simply return an empty list.

function groupInts(xs, x) {
  if (xs.length < 1) {
    return [];
  }
  let answerArr = [];
  let flag;
  if (xs[0] >= x) {
    flag = true;
  } else {
    flag = false;
  }
  let localArr = [];
  localArr.push(xs[0]);

  for (let i = 1; i < xs.length; i += 1) {
    if (xs[i] < x) {
      if (flag === false) {
        localArr.push(xs[i]);
      } else {
        answerArr.push(localArr);
        localArr = [];
        localArr.push(xs[i]);
        flag = false;
      }
    }

    if (xs[i] >= x) {
      if (flag === false) {
        answerArr.push(localArr);
        localArr = [];
        localArr.push(xs[i]);
        flag = true;
      } else {
        localArr.push(xs[i]);
      }
    }
  }

  answerArr.push(localArr);

  return answerArr;
}

console.log(groupInts([1, 1, 1, 0, 0, 6, 10, 5, 10], 6));
