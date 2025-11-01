class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    const queue = [this.root];
    while (queue.length) {
      const current = queue.shift();
      if (!current.left) {
        current.left = newNode;
        return;
      } else if (!current.right) {
        current.right = newNode;
        return;
      } else {
        queue.push(current.left, current.right);
      }
    }
  }
  preorder(node = this.root) {
    if (!node) return;
    console.log(node.data);
    this.preorder(node.left);
    this.preorder(node.right);
  }

  inorder(node = this.root) {
    if (!node) return;
    this.inorder(node.left);
    console.log(node.data);
    this.inorder(node.right);
  }
}

const bt = new BinaryTree();
bt.insert(1);
bt.insert(2);
bt.insert(3);
bt.insert(4);
bt.insert(5);

bt.inorder();

console.log(bt);
bt.preorder();
