// Linked List - Methods: Append, Prepend, Delete Head, Delete Tail, Search

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  append(value) {
    if (!this.tail) return (this.head = this.tail = new Node(value));

    const currentTail = this.tail;
    this.tail = new Node(value);
    currentTail.next = this.tail;
  }

  prepend(value) {
    if (!this.head) return (this.head = this.tail = new Node(value));

    const currentHead = this.head;
    this.head = new Node(value);
    this.head.next = currentHead;
  }

  deleteHead() {
    if (!this.head) return null;

    const removedHead = this.head;

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
    }

    return removedHead.value;
  }

  deleteTail() {
    if (!this.tail) return null;

    const removedTail = this.tail;

    if (this.tail === this.head) {
      this.tail = this.head = null;
    } else {
      this.tail = removedTail.next;
    }

    return removedTail;
  }

  search(value) {
    if (!this.head) return null;

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }

    return null;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}
