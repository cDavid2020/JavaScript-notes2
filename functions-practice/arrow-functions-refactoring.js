// rest operators

function add(...nums) {
  // nums is an array
  let total = nums.reduce(function (x, y) {
    return x + y;
  });

  /* 
// what they did before JavaScript ES6

function add(...nums) {
    let total = nums.reduce(function (x, y) {
        return x+y;
    });
    
    console.log(total);
}

// The 👆 aboce function can be replaced w arrow function. Only downfall is it doesnt have THIS

 */

  // using array.reduce to the arrow function to return the total
  console.log(total); // nums is an array
}

add(4, 5, 7, 8, 12);

/* 
// Callback function boilerplate

function add(...nums) {
    
   
}

add(4, 5, 7, 8, 12)

////////////////////////////////////////////////////////


people.filter(('name')) => {
  return 'name';
});

OR

//Hint: use the 'startsWith' method (see MDN)
const peopleThatStartWithJ = people.filter((person) =>
	person.nameStartsWith("J")
);

////////////////////////////////////////////////////////
// Callback functions

setTimeout(() => {
	console.log('5 seconds in the future');
}, 5000);
 */

// The long way to write an arrow function. If we're only returning one thing, we can use the shorthand
function add(...nums) {
  let total = nums.reduce((x, y) => {
    return x + y;
  });

  console.log(total);
}

add(4, 5, 7, 8, 12);

// The shorthand method for 👆 arrow function

function add(...nums) {
  let total = nums.reduce((x, y) => x + y);

  console.log(total);
}

add(4, 5, 7, 8, 12);
