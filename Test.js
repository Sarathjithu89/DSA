class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }
  push(data) {
    this.q2.push(data);
    while (this.q1.length) {
      this.q2.push(this.q1.shift());
    }
    this.q = this.q1;
    this.q1 = this.q2;
    this.q2 = this.q;
  }
  pop() {
    return this.q1.shift();
  }
}

const st = new Stack();
st.push(1);
st.push(2);
st.push(3);

console.log(st.pop());
