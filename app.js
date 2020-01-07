// Doubly Linked Lists

class Node {
  constructor(data){
    this.val = data;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

// show  length
  size() {
    return this.length;
  }

// show head
  peekHead() {
    return this.head;
  }

// show tail
  peekTail() {
    return this.tail;
  }

// add to head
  unshift(data) {
    let newNode = new Node(data);
    if(this.head){
      this.
      head.prev = newNode;
      newNode.next = this.head;
      this.length++;
      this.head = newNode;
      if(!this.tail){
        this.tail = newNode;
      }
    } else {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this.head;
  }

// add to tail
  push(data) {
    let newNode = new Ndoe(data)
  }
// remove head
  shift() {

  }
// remove tail
  pop() {

  }

  get(index) {

  }

  set(index, data) {

  }

// remove at index
  removeNodeAt(index) {

  }

// show all node values with pointer to next
  print() {

  }

  reverseList() {

  }

  findCycle() {

  }

  removeDuplicates() {

  }

  findFromBack() {
    // might just set negative value on get
  }
}

// Tests
const list = new DoublyLinkedList();
// size test, peekHead, peekTail
console.log(
  list.size(),
  list.peekHead(), list.peekTail()
);
// test unShif
console.log(
  list.unshift(2), list.unshift(3), list.unshift(4)
);
console.log(list);
