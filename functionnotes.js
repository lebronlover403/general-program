// /*
// A function is a set of instructions that are all packaged together.  
// This is particularly useful if you need to reuse those instructions,
// especially if you are reusing them in multiple places, or with 
// various "starting" conditions.

// function name, parameters, arguments

// function functionName(parameter1, parameter2, etc){
//     code
// }

// functionName(argument1, argument2, etc);
// */

// //make a function that returns a message about a favorite animal.

// // function favoriteAnimal(animal){
// //     return animal + " is my favorite animal!";
// // }

// // console.log(favoriteAnimal("Panda"));
// // console.log(favoriteAnimal("Ram"));
// // console.log(favoriteAnimal("Potto"));
// // console.log(favoriteAnimal("Narwhal"));

// // What happens inside a function is frequently invisible to the outside 
// // world.  This is referred to in programming as "scope".  
// // Local scope : within a function
// // Global score : the main program

// // An example to demonstrate scope
// let test1 = 1
// let test2 = 5

// function add1(num) {
//     test2 = test2 + 1
//     return num + 1;
// }

// console.log(add1(test1));
// console.log(test1);
// console.log(test2);

// // To summarize: a function can change the value of a global variable, but 
// // only if that variable is used, BY NAME, within the function.  Variables
// // that are passed as arguments to the function, will remain unchanged.

// // we can make optional parameters.

// function greetings(name = "Mr. Smith"){
//     console.log(`Hello, ${name}`);
// }

// greetings("Mr. Smith");
// greetings("Mr. Keating");
// greetings("Mrs. Heinrich");
// greetings("Stevie T.");
// greetings();


// // anonymous functions. anonymous functins are fewquently used if a function 
// experts to take another function as a parameter.
// the function doesnt have a function name.

// (function (){
//     alert("this is an anonymous function")
// });

// An example of how you could us an anonymous function 
// function logkey(event) {
//     console.log(`you pressed the "${event.key}"`);
// }

// this.addEventListener("keydown", logkey);

// this.addEventListener("keydown", function (event) {
//     console.log(`you pressed &{event.key}`);

// another way to create anonymous functions is the "arrow function" syntax
randomLessThan(4);

// produce a number between 1 and 4 
console.lograndomLessThan (4) + 1)

// IF YOU WANT A FUNCTION TO INTERACT WITH SOMETHING ELSE,
//YOU USUALLY NEED AR RETURN VALUE 


