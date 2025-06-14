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
