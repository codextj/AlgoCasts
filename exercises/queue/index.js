// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        // O(1)
        // adding latest element at last index
        this.data.push(record);
    }

    remove() {
        // O(n)
        // first element of queue is at index 0
        return this.data.shift();
    }
}



class Queue2 {
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
}

module.exports = Queue;
