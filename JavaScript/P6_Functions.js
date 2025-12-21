console.log("THIS IS FROM SIXTH SCRIPT :");
// functions are first class citizens
// functions in js can assign to variable 
//passed as arguments
// returned 
// stored in data structures
// function add(a,b){
//     return a+b;
// }
// console.log(add);
// console.log(add(2,3));


// let sum = function add(a,b){
//     return a+b;
// }

// console.log(sum);
// console.log(sum(2,3));

//pass function as an arguments


let sum = function (a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function operate(operationFunc, a, b) {
    return operationFunc(a, b);
}

console.log(operate(sum, 2, 3));
console.log(operate(diff, 2, 3));


//Higher order functions are nothing but 
// functions which take functions as an arguments or
// return the functions


//Arrow Functions
//Function + lexical scope = Closure
let div = (a, b) => a / b;
console.log(div(4, 3));

//Functions returns
let a = 10;
function outer() {
    a = 100;
    function inner() {
        console.log('hello');
        console.log(a);
    }
    return inner;
}

let returnedFunction = outer();
a = 20;
console.log(returnedFunction);
returnedFunction();