// exersise

// example 1:
let ip = [1, 2, 3];
let op = ip.map((e, index) => {
  return e + index;
});
console.log("op", op); // op [1, 3, 5]

// example 2: addition of positive no.

let n = [1, -4, 12, 3, -12, -11, 17];

let mm = n
  .filter((i) => {
    return i > 0;
  })
  .reduce((a, b) => {
    return a + b;
  });
console.log("mm", mm);

let m = n.filter((item) => item > 0).reduce((a, b) => a + b);
console.log("m", m);

// example : 3

let array2 = ["a", "b", "c"];
let array1 = ["d", "b", "o", "c"];

const rese = array2.some((i) => array1.includes(i));
console.log(rese);

// example : 4

let array = [
  {
    id: 1,
    name: "nilesh",
    age: 10,
  },
  {
    id: 2,
    name: "akshay",
    age: 12,
  },
  {
    id: 3,
    name: "abhi",
    age: 9,
  },
  {
    id: 4,
    name: "abhi",
    age: 5,
  },
];

let newarray = array.map((item) => {
  //   return;
  return item.age > 5;
});
console.log("newarray", newarray);

// example : 5

let ab = [10, 20, 30, 40];
ab.push(); //  ab [ 10, 20, 30, 40 ]
ab.unshift(); //    ab [ 10, 20, 30, 40 ]
ab.shift([]); //  ab [ 20, 30, 40 ]
ab.pop({}); //  ab [ 20, 30]
console.log("ab", ab);

// example : 6

let obje = {
  id: 1,
  name: "omkar",
  add: "pune",
};

console.log("object length", Object.keys(obje).length);

// example : 7  switch case

let data = [
  {
    id: 1,
    name: "nilesh1",
    type: "a",
  },
  {
    id: 1,
    name: "nilesh2",
    type: "b",
  },
  {
    id: 2,
    name: "nilesh3",
    type: "b",
  },
  {
    id: 2,
    name: "nilesh4",
    type: "a",
  },
  {
    id: 3,
    name: "nilesh5",
    type: "c",
  },
];

data.map((item) => {
  switch (item.type) {
    case "a":
      console.log("a", item.name);
      break;
    case "b":
      console.log("b", item.name);
      break;
    default:
      console.log("c", item.name);
      break;
  }
});

// example : 8 split method

let myString = "hello i am nilesh,my age is 22";

console.log("length of myString is: ", myString.split(","));
