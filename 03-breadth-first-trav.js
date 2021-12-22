const { a, b, c, d, e, f } = require("./01-basics");

// QUEUE APPROACH

// ITERATIVE / LINEAR (ONLY)
const breadthFirst = (root) => {
  if (root === null) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.val);
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return result;
};

// RECURSIVE APPROACH USES 'CALL STACK' APPROACH IN ITSELF, SO THERE'S NO OPTIMAL SOLUTION FOR THE PROBLEM

console.log(breadthFirst(a));
