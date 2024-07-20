// example 1: square root of every element in an array

let array = [1, 2, 3, 4, 5];
let len = array.length;
console.log("len", len);

// array
//   .map((item) => {
//     return item;
//   })
//   .Math.pow(item, 2);

// console.log("square of every item is ", array);    [1, 4, 9, 16, 25]

//  example 2:  sum of every positive number

const input = [1, -4, 12, 3, -12, -11, 17];

// let op = input
//   .filter((item) => {
//     return item > 0;
//   })
//   .reduce((a, b) => a + b);

// short hand
let op = input.filter((item) => item > 0).reduce((a, b) => a + b);

console.log("op", op);

// example 3:

// const ip = "Nilesh Is A Good Boy";

// ip.split(" ")
//   .map((item) => item[0])
//   .join("");
// console.log(ip);

let j = "javascript is intergreated language";
console.log(j.split("i").reverse()); // [ 'ntergreated language', 's ', 'pt ', 'javascr' ]
