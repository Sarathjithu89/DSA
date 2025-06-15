//Queues
class Queues {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }
  peek() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.join(","));
  }
}

const queue = new Queues();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.print();
queue.peek();
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
queue.print();
