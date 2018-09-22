'use strict';

let assert = require('assert');
let Queue = require('../queue').Queue;

describe('Queue Test: ', () => {
  it('should use FIFO', () => {
    let items = new Queue();

    items.enqueue('1');
    items.enqueue('2');
    items.enqueue('3');
    items.enqueue('4');
    items.enqueue('5');
    items.enqueue('6');

    assert.equal(items._length, 6);
    assert.equal(items.dequeue(), '1');
    assert.equal(items.dequeue(), '2');

    assert.equal(items._length, 4);

    assert.deepEqual(items.peek(), '3', 'FIFO failed!');
    assert.deepEqual(items.peekBack(), '6', 'FIFO failed!');
  });

  it('should Add & remove front of que', () => {
    let items = new Queue();

    items.enqueue('1');
    items.enqueue('2');

    assert.equal(items._length, 2);

    items.addFront('3');
    assert.equal(items._length, 3);
    assert.deepEqual(items.peek(), '3', 'Add to front failed!');

    items.removeFront();
    assert.equal(items._length, 2);
    assert.deepEqual(items.peek(), '1', 'Remove from front failed!');
  });

  it('should Add & remove back of que', () => {
    let items = new Queue();

    items.enqueue('1');
    items.enqueue('2');

    assert.equal(items._length, 2);

    items.addBack('3');
    assert.equal(items._length, 3);
    assert.deepEqual(items.peekBack(), '3', 'Add to back failed!');

    items.removeBack();
    assert.equal(items._length, 2);
    assert.deepEqual(items.peekBack(), '2', 'Remove from back failed!');

  });

});