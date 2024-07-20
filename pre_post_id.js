let a=10;

let b= 20;

console.log(a++);   //  10
console.log(a); //  11
console.log(a++-++b+a++);// 2

console.log(a++);   //  13
console.log(++b);   //  22
console.log(a++);   //  14
console.log(a++-++b+a++);   //  8
console.log(a++-++b+a++);   //  11