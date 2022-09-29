/**
 * @description using the max heaps in actions
 * @Notes we will use the max-heap to build events on priority
 */

const { MaxHeap } = require("../Binary heaps/Max-heap");

/**
 * @type {{[key:number]: Array<()=>void>}}
 */
const events = {};

const ph = new MaxHeap();

class PriorityCallbacks {
  constructor() {}

  on(priority, callback) {
    if (events[priority]) {
      events[priority].push(callback);
    } else {
      ph.insert(priority);
      events[priority] = [callback];
    }
  }

  emit() {
    while (!ph.isEmpty()) {
      let priority = ph.extract();
      events[priority].forEach((cb) => {
        cb();
      });
    }
  }
}

module.exports = { PriorityCallbacks };
