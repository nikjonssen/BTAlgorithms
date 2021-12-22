class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.num = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

a.num = 5;
b.num = 11;
c.num = 4;
d.num = 15;
e.num = 3;
f.num = 12;

//      a
//     / \
//    b   c
//   / \   \
//  d   e   f

module.exports = { a, b, c, d, e, f };
