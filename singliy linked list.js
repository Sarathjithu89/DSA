// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class SinglyList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   append(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       this.size++;
//       return;
//     }
//     let curr = this.head;
//     while (curr.next) {
//       curr = curr.next;
//     }
//     curr.next = newNode;
//     this.size++;
//   }
//   remove(data) {
//     if (!this.head || data == null) return;
//     if (this.head && this.head.data === data) {
//       this.head = this.head.next;
//       this.size--;
//     }
//     let current = this.head;
//     let prev = null;
//     while (current) {
//       if (current.data === data) {
//         prev.next = current.next;
//         current = current.next;
//         this.size--;
//       } else {
//         prev = current;
//         current = current.next;
//       }
//     }
//   }
//   print() {
//     let curr = this.head;
//     let result = [];
//     while (curr) {
//       result.push(curr.data);
//       curr = curr.next;
//     }
//     console.log(result.join(" -> "));
//   }
// }

// const ll = new SinglyList();
// ll.append(1);
// ll.append(2);
// ll.append(3);
// ll.append(4);
// ll.append(3);
// ll.append(5);
// ll.append(1);

// ll.remove(1);

// ll.print();
// console.log("head", ll.head.data);
// console.log("size", ll.size);
