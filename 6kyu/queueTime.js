// There is a queue for the self-checkout tills at the supermarket. Your task is write a function
// to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer,
//  and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.

// output
// The function should return an integer, the total time required.

function queueTime(custumers, n) {
  if (!custumers.length) {
    return 0;
  }
  const queue = [...custumers];
  const tills = Array(Math.min(n, queue.length)).fill(0);
  while (queue.length) {
    const customer = queue.shift();
    const minTillId = tills.indexOf(Math.min(...tills));
    tills[minTillId] += customer;
  }
  console.log(Math.max(...tills));
}

queueTime([10, 2, 3, 3], 2), 10;
queueTime([1, 2, 3, 4], 1), 10;
queueTime([2, 2, 3, 3, 4, 4], 2), 9;
queueTime([1, 2, 3, 4, 5], 100), 5;
