// Global scope - means you can reference the variable anywhere in your code

// Declare your variable here


function fun1() {
  // Assign 5 to oopsGlobal Here
  
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") { // will not equal undefined if it is declared
    output += "myGlobal: " + myGlobal; // since this is global scope, it will be available to the function, it does not equal undefinet. it equals 10. it 
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();


////////////////////////////////////////////////////////

// cgpt 

// Declare a constant variable named "myGlobal" and assign it the value of 10
const myGlobal = 10;

// Declare a function named "fun1" that assigns the value of 5 to the variable "oopsGlobal"
function fun1() {
// Assigns the value of 5 to the variable "oopsGlobal"
oopsGlobal = 5;
}

// Declare a function named "fun2" that checks if the variables "myGlobal" and "oopsGlobal" are defined
function fun2() {
// Declare a variable named "output" and assign it an empty string
let output = "";
// If the variable "myGlobal" is defined, add the string "myGlobal: " and the value of "myGlobal" to the variable "output"
if (typeof myGlobal != "undefined") {
output += myGlobal: ${myGlobal};
}
// If the variable "oopsGlobal" is defined, add the string " oopsGlobal: " and the value of "oopsGlobal" to the variable "output"
if (typeof oopsGlobal != "undefined") {
output += oopsGlobal: ${oopsGlobal};
}
// Print the value of "output" to the console
console.log(output);
}

// Call the function "fun1"
fun1();
// Call the function "fun2"
fun2();


// Refactor 👆code

function convertTemperature(celsius, decimalPlaces) {
  // celsius to fahrenheit
decimalPlaces = decimalPlaces || 1;
const fahrenheit = celsius * 1.8 + 32;
return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21)); // returns 69.8. What if we dont want decimal places  
// to provide an integer 

// use the string method .toFixed() to round the number to the nearest integer. it returns a STRING. we need to convert it to a number. we can use the Number() function to do that.

console.log(convertTemperature(21));