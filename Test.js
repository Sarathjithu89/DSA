// const array = [1, 4, 5, 6, 7];

// function sum(array){
//     if(arra.length<0)return;
//     let sum=0;
//     let l=array.length;
//     let first=array[l-1]
//     if(first%2!==0)first=0;
//     if(first%2==0)sum+=first;
//     return sum(arra.slice(-1))+
// }

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }
//   mid() {
//     let current = this.head;
//     if (!this.head) return;
//     let slow = this.head;
//     let fast = this.head;
//     while (fast && fast.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//     }
//     console.log(slow.data);
//   }
//   add(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     newNode.next = this.head;
//     this.head = newNode;
//   }
// }

// const ll = new LinkedList();

// ll.add(1);
// ll.add(2);
// ll.add(5);
// ll.add(4);
// ll.add(5);

// ll.mid();

// for(let i=1;i<=10;i++){
//     console.log(i);
//     if(i==5)continue;
// }
//1,2,3,4,6,7,8,9,10
// let n=1
// do{
//     console.log(n*7)
//     n++;
// }while(n<=10)

// function any(){
//     var t=10;
// }

// any();
// console.log(t)

// let a = 10
// console.log(a++)//10
// console.log(--a)//10
// console.log(a)//10
// console.log(++a)//11
// console.log(a++)//11
// console.log(a)//11

// try{

// }catch(e){

// }finally{

// }

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i == 5) continue;
}
