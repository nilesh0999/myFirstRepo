const subjects = ["maths", "bio", "phy", "chem", "english", "marathi"];

console.log(subjects);
// [ 'maths', 'bio', 'phy', 'chem', 'english', 'marathi' ]

const marks = [];
marks[0] = 45;
marks[1] = 39;
marks[2] = 65;
marks[3] = 59;
marks[4] = 45;

console.log(marks);

// [ 45, 39, 65, 59, 45 ]

let mark = marks[2];
console.log(mark);

// 65

marks[0] = 79;
console.log(marks);

// [ 79, 39, 65, 59, 45 ]

let length = marks.length;
console.log(length);

// 5

// 1.push method  =  add element at "last" position

const assets = ["computers", "laptops", "tables", "chairs", "fan"];

assets.push("lights");

console.log("push element in array", assets);

// o/p = [ 'computers', 'laptops', 'tables', 'chairs', 'fan', 'lights' ]

let asset = assets.push("lamps");

console.log("push element in array", assets);

//  o/p = ['computer'laptops','tables','chairs','fan','lights','lamps']

// 2.pop method = delete the "last" element in array

assets.pop();

console.log("pop element from array", assets);

// o/p = [ 'computers', 'laptops', 'tables', 'chairs', 'fan' ]

// 3. shift method = delete the "1st" element in the array

assets.shift();

console.log("shift", assets);

// o/p = [ 'laptops', 'tables', 'chairs', 'fan' ]

// 4. unshift method =  add element in array at "1st" position

assets.unshift("camera");

console.log("unshift", assets);

// o/p= [ 'camera', 'laptops', 'tables', 'chairs', 'fan', 'lights' ]

// 5. splice method(position,delete,elements names) = we can add element in between array & also we can remove element from array

let newAssets = ["camera", "laptops", "tables", "chairs", "fan", "lights"];

newAssets.splice(1, 1, "router");

console.log("splice", newAssets);

// o/p [ 'camera', 'router', 'fan', 'lights' ]

// here 1 say position says add element should be added
// here 0 say how many elements should be removed

// 6. slice method(start,end)  = it return new array

//  "0" indicate startring value & "3" indicate end value
// & then it gives new array in between "0 to 3" values

let emps = ["nilesh", "akshay", "sunny", "sachin", "shanii"];

let student = emps.slice(0, 3);
console.log("----------------------students are", student);
console.log("employees are", emps);

// o/p = students are [ 'nilesh', 'akshay', 'sunny' ]

// 7. map() = it return a new array

let arr = [6, 8, 5, 3, 7, 9];

// let newarr = arr.map((e) => {
//   return e * 2;
// });

let newarr = arr.map((e) => e * 2);
console.log("map create new array", newarr);

// 8. find () returns the value of the 1st element in an array that passes true

let age = [12, 11, 23, 15, 45, 17, 18];

let adult = age.find(function (element) {
  // return element < 8;
  return element > 18;
});
console.log("find", adult); //  23

// 9. findIndex () // it return array index that element in an array condition is true

let adults = age.findIndex(function (element) {
  return element >= 18;
});
console.log("findindex", adults); //  2 (it gives array index that condtion is true)

// 10. reduce ()  it return the that array elements addition (total,current value)

let ar = [5, 4, 3, 8];

let reduce = ar.reduce(function (a, b) {
  return a + b; //20
  // return a + a; //  40
});
console.log("array element addition", reduce);

// 11. filter () it returns new array if condtion get true

let size = [30, 26, 22, 28, 32];
let pant = size.filter((s) => {
  return s > 27; 
});
console.log("filter", pant); // [30,28,32]

// 12. some() = it return boolean value if condition is satisfied

let arr1 = [1, 2, 3, 4, 5, 6];
let a = arr1.some((a) => {
  return a > 5;
});
console.log("some method", a); // true

let array = ["a", "b", "c"];
let array1 = ["d", "r","c", "o"];

const rese = array.some((i) => array1.includes(i));
console.log("rese",rese);
// console.log('stt',array.some((i)=>
//   array1.includes(i)
// ));

// console.log('aray1111',array.some((b)=>array1.includes(b)));
