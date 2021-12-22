const { a, b, c, d, e, f } = require("./01-basics");

// OVERALL STACK APPROACH

// ITERATIVE / LINEAR
const depthFirst = (root) => {
  if (root === null) return [];
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};

// RECURSIVE
const depthFirst = (root) => {
  if (root === null) return [];
  const leftNodes = depthFirst(root.left); // [b, d, e]
  const rightNodes = depthFirst(root.right); // [c, f]
  return [root.val, ...leftNodes, ...rightNodes];
};

console.log(depthFirst(a));
