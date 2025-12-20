console.log("THIS IS FROM THIRD SCRIPT :");
let x="Niraj";
let y=x;

x="Dhiraj";
console.log(x);
console.log(y);

// the value of the x is changed not y 
// because it is copied by the value not by th reference
let p ={name : "niraj"};
let q=p;
p.name ="Dhiraj";

console.log(p);
console.log(q);
// reference is copied



//Arrays
//Arrays are acually objects in js
let courses =['hld','lld','dsa', 6, true , null];

console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);

// or 
courses.map((dep)=>{
    console.log(dep);
});


//Functions

function createCourse(coursename){
    console.log('Creating '+ coursename);
};
createCourse('python');
createCourse('c#');

//arrow function
const doSomething = ()=>{

    console.log(courses);
    
}

doSomething();


/*
conclusion - 
As the arrays and functions are the objects
the the only reference type is Object in js

*/

