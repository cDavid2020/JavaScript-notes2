// Chat application
// program within our program to execute as many times as we want

// here it takes hello world as an input and output to the console

/* 
a function can do both of these Things
   // input -> performs an action
    // input -> returns some data
 */

const user1 = "Reed";
const user2 = "Doug";

const message = `User (user) says: (text)`;

alert();
console.log('hello jack');

// function declaration example - "function echo() >>> "hello world""
// functions - alert(); console.log(); prompt(); confirm();

// function declaration example - "function echo() >>> "hello world"" INPUT (performs an anction) & OUTPUT returns some data

// function example
function echo() // the paramaters go here, the inputs. inside the curly brackets {} is where we call/execute the function

function echo(input) {
  console.log(input);

}
echo(42) 
// the 👆 is 

/* 
why doesnt this code work? why do we get a "reference error"? in the terminal. because the greeting function is SCOPED TO THAT VARIABLE. IT CAN ONLY ACCESS WITHIN {}

function echo(input) {
  let greeting;  
  console.log(input);  
}

console.log(greeting);
echo(42);
*/

// Refactoring the above code in the comments to use INTERPOLATION WITH TEMPLATE LITERALS

let greeting = "Hi";  

function echo(input) {
  console.log(`${greeting} ${input}`);  
}

console.log(greeting);
echo(42);


///////////////

// Define a variable named "greeting" with the value "Hi"
let greeting = "Hi";  

// Define a function named "echo" that takes an input and logs a string that concatenates "greeting" and the input with interpolation to the console
function echo(input) {
  console.log(`${greeting} ${input}`);  
}

// Log the value of "greeting" to the console
console.log(greeting);

// Call the "echo" function and pass the value 42 as an input
echo(42);

/* 
This code defines two constants, user1 and user2, with the values "Reed" and "Doug" respectively.
Then it defines a function sendUserMessage that takes two parameters, user and text. Inside the function, it logs a string that concatenates "User ", the value of the user parameter, " says: ", and the value of the text parameter.

It then calls the sendUserMessage function twice, passing in the values of user1 and "Hey there" for the first call and user2 and "What's up?" for the second call.

It also defines a function named echo which takes two input parameters, input and greeting. Inside the function, it returns a string that is made by concatenating the input parameter greeting and the input parameter input.

It then calls the echo function, passing the value 42 and "Hi" as input parameter and assigns the returned value to result variable.

The commented out lines are not executed and just there as notes or examples.
 */