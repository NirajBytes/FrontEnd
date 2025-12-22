console.log("THIS IS FROM FIFTH SCRIPT :");
console.log(a);
console.log(this.a);
console.log(window.a);
var a = 10;

console.log(a);
console.log(this.a);
console.log(window.a);
console.log(window === this);

// Const , let , var
console.log(d);
{
    let c = 10;
    const b = 22;
    var d = 30;
    console.log(c);
    console.log(b);
    console.log(d);
}

// console.log(c);  //cannot be accessed 
// console.log(b);  // cannot be accessed

console.log(d);
//const and let are blocked scopped
//var is function scopped


function Hello() {
    // let v=10;
    console.log(v);
}
let v = 100;
Hello();