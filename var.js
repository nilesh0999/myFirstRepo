// var a=5;
// var b=3;
// var result;

// console.log("value of a",a);
// console.log("value of b",b);
// console.log("value of result",a-b);     //  2


let rio=25;
let nil=rio-2;

console.log("passing value & reffernce is: ",nil);
console.log("passing value & reffernce is: ",rio);

let operator=function(a,b=10){
    console.log("addition",a+b);    //  addition 15 
    console.log("sub",a-b);     //  sub 5
}
// // op(10);
// // op(10,5)
operator(5)