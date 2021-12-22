const { a, b, c, d, e, f } = require("./01-basics");

// RECURSIVE
const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.left === null) return root.num;
  const maxLeaf = Math.max(maxPathSum(root.left), maxPathSum(root.right));
  return root.num + maxLeaf;
};

console.log(maxPathSum(a));
