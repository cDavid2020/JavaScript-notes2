// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
function countdown() {
  // internal implementation we want to stay in scope of closure
  // write your code here
}
return function enclosedFunction() {
  // implementation
// const countingDown = countdown();

// console.log(countingDown());
// console.log(countingDown());
// console.log(countingDown());


////////////////////////////////////////////////////////
function countdown(startingNumber, step) {
  let countFromNum = 11;
  return function decrease() { // decreas our count
  countFromNum -= step; //replaced integer w step
  return countFromNum;
  }
}
const countingDown = Countdownsown();








////////////////////////////////////////////////////////
// CGPT

// Hard-coded starting number inside closure
function countdown() {
  let count = 10;
  
  return function enclosedFunction() {
  count--;
  return count;
  }
  }
  
  const countingDown = countdown();
  console.log(countingDown()); // 9
  console.log(countingDown()); // 8
  console.log(countingDown()); // 7
  
  // Provided number and step
  function countdown(start, step) {
  let count = start;
  
  return function enclosedFunction() {
  count -= step;
  return count;
  }
  }
  
  const countingDown = countdown(20, 5);
  console.log(countingDown()); // 15
  console.log(countingDown()); // 10
  console.log(countingDown()); // 5