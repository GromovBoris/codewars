// Your task is to write a function calculate, which accepts a string with a mathematical exprssion written in
// prefix Polish notation and evaluates it. This means that all operations are placed before their operands. For
// example, the expression 3 + 5 is written in Polish notation as + 3 5, and (3 + 5) / (2 * 2) is / + 3 5 * 2 2.

function calculate(expression) {
  const stack = [];
  const arr = expression.split(" ");
  while (arr.length) {
    const el = arr.pop();
    const numberedEl = Number(el);
    if (!isNaN(numberedEl)) {
      stack.push(numberedEl);
      continue;
    }
    let firstNum = stack.pop();
    let secondNum = stack.pop();
    let result;
    switch (el) {
      case "+":
        result = firstNum + secondNum;
        break;
      case "-":
        result = firstNum - secondNum;
        break;
      case "*":
        result = firstNum * secondNum;
        break;
      case "/":
        result = firstNum / secondNum;
        break;
      default:
        console.log("Недопустимый арифметический оператор");
    }
    stack.push(result);
  }
  return stack[0];
}
