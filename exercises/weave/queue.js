// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  // Stephen way
    constructor() {
        this.data = [];
    }

    add(record) {
        // O(n)
        // adding latest element at index 0
        this.data.unshift(record);
    }

    remove() {
        // O(1)
        // first element of queue is at last index
        return this.data.pop();
    }

    peek() {
      return this.data[this.data.length-1];
  }
}

module.exports = Queue;
