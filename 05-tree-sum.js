const { a, b, c, d, e, f } = require("./01-basics");

// ITERATIVE / LINEAR
const treeSum = (root) => {
  if (root === null) return "";
  let sum = "";
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    sum += current.val;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return sum;
};

//RECURSIVE
const treeSum = (root) => {
  if (root === null) return "";
  return root.val + treeSum(root.left) + treeSum(root.right);
};

console.log(treeSum(a));
