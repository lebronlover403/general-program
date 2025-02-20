function multiply(num1,num2){
    let x = num1 * num2;
    return x;
}

function checkage(age){ 
    if (age > 18){
        return true;
    } else {
        return confirm ('did parents allow you')
}
}


function checkAge(age) {
    if (age >18) {
        return true;
 }
return confirm ('did parents allow you?')

// three kinds of loop: for, while, do...while
//A Do..whileloop is the only one of these that must execute at least once 
//break-will eject from the loop altogether 
//continue - skipthe rest of the current iteration 





/* arrays 
In programming, an array is a collection of values. specifically, its an "ordered" collection of values 

let arrayName +[item, item2, item3, item4]

tomake an emprt array, there are two approaches;
let fakearray1= new array();
let fake array + [];
*/

let fruits = ["apples","bannans", "canteloups", "durians", "lychees"]


fruits[fruits.length] = "blueberries";

/* an array can store elements of any type. uncluding, mixing types in the same array */

let exampleArray2 = ["apple", 35, true, function (){console.log('hello');}
    