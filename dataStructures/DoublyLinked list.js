class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class Doublylist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
  delete(value) {
    if (!this.head) return;
    if (this.head.data === value) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.size--;
      return;
    }
    let current = this.head;
    while (current && current.data !== value) {
      current = current.next;
    }
    if (!current) return;
    if (current.next) {
      current.next.prev = current.prev;
    }
    if (current.prev) {
      current.prev.next = current.next;
    }
    if (current.next === null) {
      current.prev.next = null;
      this.tail = current.prev;
    }
  }
  mid() {
    if (!this.head) return;
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log(slow.data);
  }
  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}
const dll = new Doublylist();
dll.append(1);
dll.append(2);
dll.append(3);
dll.append(4);
dll.append(5);
dll.append(6);
dll.append(7);

dll.delete(4);

dll.mid();
dll.print();
console.log("Head", dll.head.data);
console.log("tail", dll.tail.data);
