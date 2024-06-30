// You have two arguments: string - a string of random letters(only lowercase)
// and array - an array of strings(feelings). Your task is to return how many
// specific feelings are in the array.

function countFeelings(string, array) {
  let answer = [];
  const letters = string.split("");
  const counts = {};
  for (let i = 0; i < array.length; i++) {
    let symbols = array[i].split("");
    let flag;
    for (const char of symbols) {
      for (const char of letters) {
        counts[char] = (counts[char] || 0) + 1;
      }
      if (!counts[char]) {
        flag = false;
        break;
      } else {
        counts[char] -= 1;
        flag = true;
      }
    }
    if (flag === true) {
      answer.push(array[i]);
    }
  }
  return answer.length === 1
    ? `${answer.length} feeling.`
    : `${answer.length} feelings.`;
}
