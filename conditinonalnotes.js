// // thuzz are notes on conditionals in programing

// /* at its most basic level, a conditional statement is just "if -> then"
// we will see many more complicated exapmles, but all of them rely on the idea
// that you are checking if a condition is true, and then doing something 
// based on the true/false of that condition.

// // conditional statemtns relu on some form of comparison

// /* comparisons in jahscript and most if not all programming languages look like math equations to some extent.

// a < b ( is a less than b?)
// a > b (is a greater than b?)
// a == b (is a equal to b? )
// a <= b (is a less than or equal to b?)
// a >= b (is a greater than or equal to b?)
// */

// // examples:
// let a = 5;
// console.log (5 <3);
// console.log (5 >3);
// console.log(a ==5);
// console.log(a =="5");

// // havascript also has a "===", for "strict equality". this mean that 
// // this means that it will as "is a equal to b and do a and b have the same data type?"



// // the last symbol we need to ttalk about before jumping into actual conditioansl 

// let testgrade =65;

// if (testgrade >90){
//     console.log("A");
// } else if (testgrade >80){
//     console.log("B");
// } else if (testgrade >= 70) {
//     console.log("C");
// }else {
//     console.log("F");
// }


// //logical operators:
// //Modify or combine multiple logic statements
// //and: && -> will return "true" only when both statements are true 
// //or: || -> will return "true" when either statement is rue 
// //not: ! -> flips the true/false value

// console.log("23" + "24");


// /* javascript uses "truthy" and "falsy" values.
// a truthy calue will be treated the same as "true"
// the following values are "truthy";
// -true
// -any not empty string (including "false")
// -(we havent talked about these); arrys, functions, and objects

// the following values are "falsy"

// the following values are "falsy";
// -false
// -0 aa s numver or 0n 
// -"" (am empty string)
// -null
// -underfinded
// -NaN
// -an example; */

// let testVariable = null || "banana" || 1 || false;
// console.log(testVariable);

// let testVariable2 = null || false || 0;

// /* when could this be useful? if you have a form that you need a use to fill out 

// let name = user_input || "unknown name";
// */

// /* can also be used to set up conditional alerts or functions 

// let printsuccess = success;
// printsuccess || alert ("DID NOT PRINT")
// printsucces || alert ("Printed successfully ")
// */

// /*and (&&) finds the first "falsy" value 
// -evaluate from left to right 
// -converts the value to a boolean (based on truthy/falsyness)
// -stops when it gets to the first falsy value 
// -if no valeus are falsy returns last valuuu

// */

// console.log(true && true && true &&);
// console.log(true && 0 && true && true);
// console.log(true && "false" && 5 && 3.14);

// // && has a higher precendence than ||
// // a && b || c && d ==(a  && b) || (c && d)
// // if you want that or operation to combine b-c
// // "a / b or c / d"
// // a && b (b || c) && d

// // DO NOT DO THIS DONT OR ELSE YOU DUMB ASF ON FOENEM GRAVE!!!
// // SOME people use && instead of "if"
// let x - 1;
// (x > 0) && alert ("greater than zero");

// // while that works this is much more readable gng 
// let y = 1
// if (y > 0){
//         alert ("greater than zero!")
// }

// /* NOT - ! 
// ! takes a single argument, and does the following;
// 1. converts the value to a boolean type (true/false)
// 2. returns the oppostie result of one 
// */
// console.log(!NaN)
// console.log(!1);

// // because of this behavior sometimes poepoe will use !! to vvonvert alues to boolean 

// console.log(1!Nan)

// //if you dont use the !! you can do this ame operation with boolean(;
// console.log (Boolean(NaN));
// console.log(BooLean(NaN));

/* if we have a lot of poosibel test cases we want to chekc it is frequaently\better to use a "switch" instead of a if else if chain 

structer: (expressions){
    case x:
        // code geos here 
        case y:
    case z:
        CASE Z;
        defauls 
        
}


- swtich expresson is evaluated
-the value of the expression is ocmpared twith the values of each ase.
-if there is a match the associated block of code is executed\
-if there is no match the default case is executed.


// there is something called the getDay metho. this returns the weekday 
//as a numver bettween 0 and SSIX
peniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penispeniw penis

*/
// switch (new Date ().getDay()){
//     case 0:
//         day = "sunday";
//         break; 
//     case 1:
//         day = "monday";
// }

// alert(null||2||undefined);


// alert( alert(1) || 2 || alert(3));


// console.log(console.log(1) && console.log(2));


//the syntax for this is:
// condition ? do this : else do this instead 
