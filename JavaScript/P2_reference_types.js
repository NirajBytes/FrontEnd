console.log("THIS IS FROM SECOND SCRIPT :");
// Reference types : Objects , Arrays , Functions

//object
let course = {
    title: "Cse",
    Desc: "software dept",
    rating: 10
};
console.log(course);
console.log(typeof (course));

//for access perticular element
console.log(course.title);
console.log(typeof (course.title));
console.log(course["title"]);

//Array 
let nums = [1, 2, 3, 4, 5];
console.log(nums);
console.log(typeof (nums));
console.log(nums[0]);

//function 
function doSomthing() {
    return 'hello';
}

console.log(doSomthing());


