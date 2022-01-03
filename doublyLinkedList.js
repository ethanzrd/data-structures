// Doubly Linked List - Methods: Append, Prepend, Delete Head, Delete Tail, Search

class LinkedList {
  consutrctor() {
    this.head = this.tail = null;
  }

  append(value) {
    if (!this.tail) return (this.tail = this.head = new Node(value));

    const currentTail = this.tail;
    this.tail = new Node(value);
    currentTail.next = this.tail;
    this.tail.prev = currentTail;
  }

  prepend(value) {
    if (!this.head) return (this.head = this.tail = new Node(value));

    const currentHead = this.head;
    this.head = new Node(value);
    currentHead.next = this.head;
    this.head.prev = currentHead;
  }

  deleteHead() {
    if (!this.head) return null;

    const removedHead = this.head;

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    return removedHead.value;
  }

  deleteTail() {
    if (!this.tail) return null;

    const removedTail = this.tail;

    if (this.tail === this.head) {
      this.tail = this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    return removedTail.value;
  }

  search(value) {
    if (!this.head) return null;

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) return currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }
}

class Node {
  consutrctor(value, next, prev) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
  }
}
