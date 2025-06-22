// //stack
// class Stack {
//   constructor() {
//     this.items = [];
//   }
//   push(element) {
//     this.items.push(element);
//   }
//   pop() {
//     if (this.isEmpty()) return null;
//     return this.items.pop();
//   }
//   peek() {
//     if (this.isEmpty()) return null;
//     return this.items[this.items.length - 1];
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
//   size() {
//     return this.items.length;
//   }
//   print() {
//     console.log(this.items.join(" "));
//   }
// }

// const stack = new Stack();
// stack.push(13);
// stack.push(29);
// stack.push(30);

// stack.print();

//stack using functions clousuers
// function createStack() {
//   const items = [];
//   return {
//     push: function (element) {
//       items.push(element);
//     },
//     pop: function () {
//       if (items.length === 0) return null;
//       return items.pop();
//     },
//     peek: function () {
//       if (items.length === 0) return null;
//       return items[items.length - 1];
//     },
//     isEmpty: function () {
//       return items.length === 0;
//     },
//     size: function () {
//       return items.length;
//     },
//     print: function () {
//       console.log(items.join(","));
//     },
//   };
// }

// const functionStack = createStack();
// functionStack.push(1);
// functionStack.push(39);
// functionStack.push(34);
// functionStack.push(44);

// functionStack.print();
// console.log(functionStack.peek());
// console.log(functionStack.pop());
// console.log(functionStack.isEmpty());

// functionStack.print();

//stack using linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if (!this.top) return;
    const poped = this.top.data;
    this.top = this.top.next;
    return poped;
  }
  peek() {
    if (!this.top) return null;
    return this.top.data;
  }
  print() {
    if (!this.top) return;
    let current = this.top;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);

stack.print();
console.log("poped", stack.pop());
console.log("poped", stack.pop());

stack.print();

//stack using queue;
class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }
  push(data) {
    this.q2.push(data);
    while (this.q1.length > 0) {
      this.q2.push(this.q1.shift());
    }
    [this.q1, this.q2] = [this.q2, this.q1];
  }
  pop() {
    if (!this.q1) return;
    return this.q1.shift();
  }
}
