'use strict';

export default function josephusSurvivor(n, k) {
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
      this.activeNode = null;
    }
    add(value) {
      if (this.head === null) {
        const newNode = new Node(value);
        this.head = newNode;
        this.activeNode = this.head;
        this.length++;
      } else {
        const newNode = new Node(value);
        let currentNode = this.head;
        while (currentNode.next !== null) {
          console.log('hey');
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        this.length++;
      }
    }
    incrementActive() {
      if (this.length > 1) {
        this.activeNode = this.activeNode.next;
        console.log('Current Active node: ', this.activeNode.value);
      }
    }

    wrapList() {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        console.log(currentNode);
        currentNode = currentNode.next;
      }
      currentNode.next = this.head;
    }

    removeNode(value) {
      let previousNode = this.head;
      let currentNode = this.head.next;
      console.log(currentNode.value === value, "IDK");
      while (currentNode.value !== value) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      console.log('removing node');
      console.log('BEFORE', previousNode.next);
      previousNode.next = currentNode.next;
      console.log('AFTER', previousNode.next);
    }
  }
  const linkedList = new LinkedList();
  let emergencyExit = 0;
  for (let i = 0; i < n; i++) {
    linkedList.add(i + 1);
  }
  linkedList.wrapList();

  while (linkedList.length > 1) {
    emergencyExit++;
    console.log('this');
    for (let i = 0; i < k; i++) {
      linkedList.incrementActive();
    }
    linkedList.removeNode(linkedList.activeNode.value);
    if (emergencyExit > 10) {
      return;
    }
  }
  console.log(linkedList);
}
