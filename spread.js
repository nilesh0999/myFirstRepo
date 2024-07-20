let arr = [2, 4, 6, 8];
// // let arr1=[...arr,1,3,5,7,9]
let arr1 = [...arr, 1, 3, 5, 7, 9];
// // console.log("add",+ " " +arr+" "+arr1); // without spread operator
console.log("spread operator", arr1);

let std = {
  name: "nilesh",
  age: 22,
};

let std1 = {
  ...std,
  values: "vinayak",
  arr: 19,
};
console.log(std1);

// rest operator

function sum(a, b, ...c) {
  console.log("rest operator", a, b, c);
}
sum(2, 5, 6, 5);
