// Functions

function sum(num1, num2) {
  return num1 + num2;
}

// calling a function (execute a function)
const result = sum(10, 5); // 15. the arguments are 10 & 5
console.log(result);

/* 
PARAMETERS VS ARGUMENTS
In JavaScript, a parameter is a variable in a function definition. An argument is the actual value passed to the function when it is called. For example, in the function function add(a, b) { return a + b; }, 'a' and 'b' are the parameters. When the function is called with add(1, 2), the values '1' and '2' are the arguments. The parameters act as placeholders for the values that will be passed to the function when it is called.

 */

function myFunc(data) {
  console.log(data);
}
