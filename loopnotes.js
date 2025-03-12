// Here are my notes for loops and arrays up through today.  Please copy and paste into your own notes document, then pass it up to GitHub!

// /* Notes on Loops in javaScript */

// /* Loops are a great way for us to repeat a set of steps.  
// If you have something you want to do multiple times in a row, or 
// until something happens, loops are an ideal solution 

// There are two general flavors of loop in programming: 
// -While loops
// -For loops

// WHILE LOOPS:
// while (condition) {
//     //CODE GOES HERE
// }

// This code will repeat as long as that condition is true.

// example:  */
// // let i = 0;
// // while (i < 3){
// //     console.log(i);
// //     i++;   // shorthand for i += 1, which is in turn a shorthand for i = i + 1
// // }

// /* A single time through a loop is called an iteration.  
// while loops will continue until their condition becomes falsy  
// Remember, 0 is falsy.  */

// //i is already 3, because of the prior loop
// // while (i) {
// //     console.log("banana");
// //     i--;
// // }

// /* There is a second flavor of while loop, called a do... while loop
// The primary difference between a do... while loop and a while loop, is
// that a do... while loop will always execute at least once.  

// DO... WHILE LOOP STRUCTURE:
// do {
//     //CODE GOES HERE
// } while (condition);
// */

// // let a = 0;
// // do {
// //     console.log(a);
// //     a += 1;
// // } while (a < -1);

// /* the other kind of loop is the FOR loop.  
// For loops are essentially just fancy while loops, their syntax is more 
// complicated, but they're also more commonly used.  You are less likely 
// to set up an infinite loop when using a for loop.

// FOR LOOP STRUCTURE:
// for (begin; condition; step) {
//     // CODE GOES HERE
// }

// example: */
// // for (let j = 0; j < 5; j++){
// //     console.log(`j = ${j}`);
// // }

// /* with either form of Loop, as a general rule, if your condition is going 
// to be based on a NUMBER, you probably want to use: <, >, <=, >=.
// ==, != are likely to enable you to "miss" and accidentally make an infinte loop.

// You'll also find that you'll sometimes be off by 1.  Frequently the solution to this
// is just to change between < and <=  OR  > and >=*/

// /* You CAN skip elements of the for loop declaration.  For example:

// let i = 0;

// for(; i < 3; i++) {
//     console.log(i);
// }

// ***********************

// for(let i = 0; i < 3;){
//     console.log(i++);
// }

// ************
// let i = 0

// for(; i < 3 ;){
//     console.log(i);
//     i++;
// }
//     \

// ********************
// for(;;){
//     //THIS IS AN INFINITE LOOP
// }

// */

// /* BREAK as a command
// break is command that will immediately exit you from a loop, 
// and advance to the next part of your code.  You can put breaks in
// as failsafes if you think you might create an infinite loop.*/

// //Example 1: sum numbers from the user
// // let sum = 0;
// // while (true){
// //     let value = +prompt("Enter a number", '');

// //     if(!value){
// //         break;
// //     }

// //     sum += value;
// // }
// // console.log('sum = ' + sum);

// // Example 2:  add numbers from 1 to a given value WITH a timeout function
// // let sum = 0;
// // let max = +prompt("Add the numbers from 1 to what?");
// // let now = Date.now();
// // console.log(now);

// // for (let i = 1; i <= max; i++){
// //     sum += i;

// //     if (Date.now() > now + 1000){
// //         console.log("This took too long");
// //         break;
// //     }
// // }

// // console.log(sum);

// /* CONTINUE as a command
// Continue is like a "lighter" version of break.  Instead of ejecting you 
// out of the loop, it just skips to the end of the current iteration.  */
// //Example:  print just the odd numbers from 1 to 20:

// // for (let i = 0; i < 21; i++) {
// //     if (i % 2 == 0){
// //         continue;
// //     }
// //     console.log(i);
// // }




// // SUMMARY:
// // THREE KINDS OF LOOP: For, While, Do...While
// // A Do...While loop is the only one of these that MUST execute at least once
// // break - will eject from the loop altogether
// // continue - skip the rest of the current iteration




// /* ARRAYS
// In programming, an array is a collection of values.  Specifically, it's an 
// "ordered" collection of values.  

// let arrayName = [item1, item2, item3, item4];

// to make an empty array, there are two approaches:
// let fakeArray1 = new Array();
// let fakeArray2 = [];
// */

// // let fruits = ["Apples", "Bananas", "Canteloupes", "Durians", "Lychees"];
// // console.log(fruits);

// // console.log(fruits[3]); // "Durians", b/c we start indexing from 0.

// // fruits[3] = "Watermelons";
// // console.log(fruits);

// // //add strawberries
// // fruits[5] = "Strawberries";
// // console.log(fruits);

// // // find out how long an array is (how many elements are in it?):
// // console.log(fruits.length);

// // fruits[fruits.length] = "Dragonfruits";
// // console.log(fruits);

// // fruits[fruits.length] = "Blueberries";
// // console.log(fruits);

// // /* an array can store elements of any type.  Including, mixing types 
// // in the same array*/

// // let exampleArray2 = ["Apple", 35, true, function() {console.log('hello');}, "array"];

// // console.log(exampleArray2[0]);
// // console.log(exampleArray2[1]);
// // console.log(exampleArray2[3]);

// /*do math or other operations with the values in an array */
// // function to calculate the distance between 2 points on the x-y plane.
// // dist = sqrt((x2 - x1)^2 + (y2 - y1)^2)
// let obj1 = [3,5];
// let obj2 = [7, 11];

// let dist = Math.sqrt((obj2[0] - obj1[0])**2 + (obj2[1] - obj1[1])**2);
// console.log(dist);

// let primes = [2, 3, 5, 7, 11, 13, 17];
// // let i = 0;
// // while (i < primes.length){
// //     console.log(primes[i]);
// //     i++;
// // }
// // console.log (primes.at(-1));

// //array methods 
// // .pop()
// - finds the last element 
// )

// //console.log(primes);
// //console.log(primes.pop());
// //console.log (primes);

// //here is a code snippet to ting the sum of all primes
// //20

// // let sum =0;
// // while (primes.length) {
// //     sum += primes.pop();
// // }

// // // the inverse of .pop() is .push()
// // // .push () adds an element to the end of the array.

// // let fruits ["apple", "banana", "canteloupe"]

// // console.log(fruits);

// // fruits.push ("watermelon");
// // console.log(fruits);

// // //unshift ()- push but at the beginning 
// // fruits.unshift ("apricot");
// // console.log(fruits);

// // // push and unshift can add multiple elements at once 
// // fruits push ("orange", "peach")
// // fruits. unshift ("lemon, "pineapple")

// // console.log(fruits);

// // //using loops with arrays
// // // heres an "old" style of pringint all of the array values;

// // for (let i = 0; i < fruits.length;

// // for(let fruit of fruits) {
// //     console.log(fruit);
// // }

// /* somethings to note about arrays is
// array.length is returning the value of the last index + 1, it is not actually 
// counting the numver of values is the array*/

// // let grades = ["A","A","B", ,"B", "A"]
// // console.log(grades);
// // console.log(grades.length);

// // let badArray = [];
// // badArray[314] = "pie";
// // console.log(badArray)

// //a multidimensional array is an array that is, in turn,
// //a multidimensional array, is an array that is, in turn made up of more arrays.

// // an array holding Xy cooordinates of 5 points
// //3,4 and 1,2 and 9,15 and 37, 11, and 215ir
// let coordinates= [
//     [3,4],
//     [1,2],
//     [9,15],
//     [37,11],
//     [215,1],
// ]

// console.log(coordinates[4][0]);

// coordinates[4][0] = 21;

// console.log(coordinates);


let teststring = "The Quick Brown fox jumped over the lazy dog";

let string1 = teststring.slice(3,10)
let string2= teststring.substring(3,10)
let string3 = teststring.substr(3,10)

console.log(string1);
console.log(string2);
console.log(string3);


/* two final string string methods;
.toUpperCase() makes the string all uper case 
.toLowerCase() makes the string all lower case 
*/

let teststring ="THhE QuiCK BrOWN Fox JuMPed Over THE LAzy DoG";

console.log(testString2.toUpperCase());
console.log(testString.toLowercase());