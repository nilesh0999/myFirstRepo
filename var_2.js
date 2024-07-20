var a="nilesh";
{
    var a="gatala";
}
console.log(a); // gatala


//  hoisting    

bb=20;
var bb;
console.log("value of bb:",bb);    //    value of bb is: 20

// aa=18;  //  assign a value
// let aa; // declare
// console.log(aa);    //  ReferenceError: Cannot access 'aa' before initialization  

function host(){
    ab=3;
    let ba=5;   
    console.log("hoisting",ba); //  5
}
host();
console.log("hoisting",ab); //  3
// console.log("hoisting",ba);  //  ReferenceError: ba is not defined