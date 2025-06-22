// //Queues
// class Queues {
//   constructor() {
//     this.items = [];
//   }
//   enqueue(element) {
//     this.items.push(element);
//   }
//   dequeue() {
//     if (this.isEmpty()) return null;
//     return this.items.shift();
//   }
//   peek() {
//     if (this.isEmpty()) return null;
//     return this.items[0];
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
//   size() {
//     return this.items.length;
//   }
//   print() {
//     console.log(this.items.join(","));
//   }
// }

// const queue = new Queues();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);

// queue.print();
// queue.peek();
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.isEmpty());
// queue.print();

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }
  enqueue(data) {
    const newNode = new Node(data);
    if (this.back) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.size++;
    this.back = newNode;
  }
  dequeue() {
    if (!this.front) return;
    const poped = this.front.data;
    this.front = this.front.next;
    if (!this.front) {
      this.back = null;
    }
    this.size--;
    return poped;
  }
  peek() {
    return this.front ? this.front.data : null;
  }
  isEmpty() {
    return this.size == 0;
  }
  print() {
    let current = this.front;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print();

console.log("dequeued", queue.dequeue());

queue.print();
