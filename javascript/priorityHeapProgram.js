const { PriorityCallbacks } = require("./PriorityHeap/PriorityHeaps");

const priotityCallbacks = new PriorityCallbacks();

priotityCallbacks.on(1, () => {
  console.log("callback has been called with priority : ", 1);
});

priotityCallbacks.on(2, () => {
  console.log("callback has been called with priority : ", 2);
});

priotityCallbacks.on(10, () => {
  console.log("callback has been called with priority : ", 10);
});

priotityCallbacks.on(10, () => {
  console.log("callback has been called with priority : ", 10);
});

priotityCallbacks.on(9, () => {
  console.log("callback has been called with priority : ", 9);
});

priotityCallbacks.emit();
