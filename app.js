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
    if(!this.tail) return;
    let popped = this.tail;

    this.tail = this.tail.prev;
    if(this.tail) {
      this.tail.next = null;
    } else {
      this.head = popped.next;
    }
    this.length--;

    popped.prev = null;
    return popped;
  }

// find node at given index
  get(index) {
    if(index > this.length - 1 || index < -this.length) return;
    if(index < 0) {
      let current = this.tail;
      let count = index + 1;
      while(count) {
        current = current.prev;
        count++;
      }
      return current;
    } else {
      let current = this.head;
      let count = index;
      while(count) {
        current = current.next;
        count--;
      }
      return current;
    }
  }

// alter value of node at given index
  set(index, data) {
    let foundNode = this.get(index);
    if(foundNode){
      foundNode.val = data;
      return foundNode;
    }
  }

// remove at index
  removeNodeAt(index) {
    let removedNode = this.get(index);
    if(removedNode === this.head) {
      return this.shift();
    } else if(removedNode === this.tail) {
      return this.pop();
    } else if(removedNode){
      if(removedNode.prev) removedNode.prev.next = removedNode.next;
      if(removedNode.next) removedNode.next.prev = removedNode.prev;

      if(removedNode.next) removedNode.next.prev = removedNode.prev;


      removedNode.prev = null;
      removedNode.next = null;
      this.length--;
      return removedNode;
    }
  }

// show all node values with pointer to next and prev
  print() {
    // print combined or two seperate statements?
    // if(!this.head || !this.tail) return 'null';
    let statement = `null <->`;
    let forward = `null ->`;
    let backward = ` <- null`;
    let current = this.head;
    let alt = this.tail;
    while(current){
      statement += ` ${current.val} <->`;
      forward += ` ${current.val} ->`;
      current = current.next;
    }
    while(alt) {
      backward = ` <- ${alt.val}` + backward;
      alt = alt.prev;
    }
    return `
      ${statement} null
      ${forward} null
      null${backward}
      `;
  }

// reverse the order of nodes in the list
  reverseList() {
    if (!this.head || !this.head.next) {
      return this.head;
    }
    let current = this.head;
    let temp = null;
    let prev = null;
    let tailIsSet = false;

    while (current) {
      if(!tailIsSet){
        this.tail = current;
        tailIsSet = true;
      }

      temp = current.next;
      current.next = prev;
      current.prev = temp;

      prev = current;
      current = temp;
    }
    this.head = prev;
    return this;
  }

// determine if a cycle is present in the list
  findCycle() {
    let fast = this.head;
    let slow = this.head;
    while(fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      if(fast === slow)return true;
    }
    return false;
  }

// check for and remove duplicate values in list
  removeDuplicates() {

  }

// // check for matching order front to back, back to front?
//   checkMatchingOrder() {
//     // just handle with print()?
//   }

//   findFromBack() {
//     // might just set negative value on get
//   }
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
);
console.log(list);
console.log(
  list.pop(),
  list.pop(),
  list.pop(),
);
console.log(list);
// test shift to NULL
console.log(
  list.unshift(10),
  list.unshift(20)
);
console.log(list);
console.log(
  list.shift(),
  list.shift()
);
// test for get
console.log(list);
console.log(
  list.push(1),
  list.push(2),
  list.push(3)
);
console.log('0',list.get(0));
console.log('-1',list.get(-1));
console.log('3',list.get(3));
console.log('2',list.get(2));
console.log('4',list.get(-4));
console.log('-3',list.get(-3));
// tests for set
console.log(list.set(0, 1000));
console.log(list.set(-1, 2000));
console.log(list.set(3, 1000));
console.log(list.set(-4, 1000));
console.log(list.set(2, 3000));
console.log(list);
// test for removeNodeAt
console.log(list.removeNodeAt(2));
console.log(list.removeNodeAt(-1));
console.log(list.removeNodeAt(0));
console.log(list);
// tests for print
console.log(
  list.push(1),
  list.push(2),
  list.push(3)
);
console.log(list);
console.log(list.print());
console.log(
  list.shift(),
  list.shift(),
  list.shift()
);
console.log(list);
console.log(list.print());
// tests for reverseList
console.log(
  list.push(1),
  list.push(2),
  list.push(3)
);
console.log(list.print());
console.log(list.reverseList());
console.log(list.print());
// test for find findCycle
// list.tail.next = list.head;
// list.head.prev = list.tail;
console.log(list);
console.log(list.findCycle());
