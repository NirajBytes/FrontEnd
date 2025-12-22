console.log("THIS IS FROM Fourth SCRIPT :");

/*
hoisting is a behavior where variable and function declarations are moved to the top of their containing scope (global or local) during the compile phase, before the code is actually executed.

It is important to remember that only the declarations are hoisted, not the initializations.
*/

console.log(l);

var l = 10;

console.log(l);

//HOW JS CODE EXECUTED

//execution context
//1. memory phase - variable environment

//2.code phase - thread of execution

// hence hoisting is possible

