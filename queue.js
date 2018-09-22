'use strict';

class Queue {
  constructor() {
    this._elements = [];
    this._length = 0;
  }

  enqueue(value) {
    this._elements.push(value);
    this._length++;
  }

  dequeue() {
    if (this._length === 0) {
      return;
    }
    this._length--;
    return this._elements.shift();
  }

  addFront(value) {
    this._elements.unshift(value);
    this._length++;
  }

  addBack(value) {
    this._elements.push(value);
    this._length++;
  }

  removeFront() {
    if (this._length === 0) {
      return;
    }
    this._length--;
    return this._elements.shift();
  }

  removeBack() {
    if (this._length === 0) {
      return;
    }
    this._length--;
    return this._elements.pop();
  }

  peek() {
    return this._elements[0];
  }

  peekBack() {
    return this._elements[this._length - 1];
  }

}

module.exports = {
  Queue: Queue
};