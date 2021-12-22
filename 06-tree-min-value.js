const { a, b, c, d, e, f } = require("./01-basics");

// ITERATIVE / LINEAR (DEPTH FIRST)
const treeMin = (root) => {
  if (root === null) return Infinity;
  let smallest = Infinity;
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.num < smallest) smallest = current.num;
    if (current.left !== null) stack.push(current.left);
    if (current.right !== null) stack.push(current.right);
  }
  return smallest;
};

// RECURSIVE
const treeMin = (root) => {
  if (root === null) return Infinity;
  const leftMin = treeMin(root.left);
  const rightMin = treeMin(root.right);
  return Math.min(root.num, leftMin, rightMin);
};

console.log(treeMin(a));
