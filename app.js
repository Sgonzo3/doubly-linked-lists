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
      this.head.prev = newNode;
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
    let newNode = new Node(data);

    if(this.tail){
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.length++;
      this.tail = newNode;
      if(!this.head){
        this.head = newNode
      }
    } else {
      this.tail = newNode;
      this.head = newNode;
      this.length++;
    }
    // could return length instead
    return this.tail;
  }
// remove head
  shift() {
    if(!this.head) return;
    let shifted = this.head;
    this.head = shifted.next;
    if(this.head){
      this.head.prev = null;
    } else {
      this.tail = shifted.prev;
    }
    this.length--;

    shifted.next = null;
    return shifted;
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
// test unshift
console.log(
  list.unshift(2), list.unshift(3), list.unshift(4)
);
console.log(list);
// test push
console.log(
  list.push(20), list.push(30), list.push(40)
);
console.log(list);
// test shift
console.log(
  list.shift(),
  list.shift(),
  list.shift(),
)
console.log(list);
