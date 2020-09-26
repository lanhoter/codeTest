// Question 2:
// Implement clearAllTimeout

let id = setTimeout(callback, delay);
clearTimeout(id);

setTimeout(callback, delay);
setTimeout(callback, delay);
setTimeout(callback, delay);
// implement clearAllTimeout();

// Solution

let oldTimeout = window.setTimeout;
let allTimeout = [];

window.setTimeout = function (callback, delay) {
  let id = oldTimeout(callback, delay);
  allTimeout.push(id);
  return id;
};

function creallAllTimeout() {
  allTimeout.forEach((id) => clearTimeout(id));
  allTimeout = [];
}
