// let arr = [1, 2, 3, 4, 5, 6];
// for (let key in arr) {
//   console.log(key); //   0 1 2 3
//   console.log(arr[key]); // 1 2 3 4
//   if (key == 3) break;
// }

// array methods

const jivlags = [
  {
    name: "shani polekar",
    height: 156,
    mass: 65,
    gender: "male",
    hTown: "mulshi",
  },
  {
    name: "nagesh swami",
    height: 159,
    mass: 60,
    gender: "male",
    hTown: "latur",
  },
  {
    name: "siddhesh kudale",
    height: 160,
    mass: 70,
    gender: "male",
    hTown: "mulshi",
  },
  {
    name: "anup sharma",
    height: 162,
    mass: 75,
    gender: "male",
    hTown: "up",
  },
  {
    name: "nilesh gatala",
    height: 170,
    mass: 69,
    gender: "male",
    hTown: "hyd",
  },
  {
    name: "shandhya swami",
    height: 155,
    mass: 52,
    gender: "female",
    hTown: "latur",
  },
];

console.log("Array Of Object length is:", Object.keys(jivlags).length); // Array Of Object length is: 6

// *****Filter Method*****

// 1.get jivlags with mass greater than 65

let mass = jivlags.filter((item) => item.mass > 65);
console.log("mass greater than 65", mass);
console.log("mass length is", mass.length); // mass length is 3

// 2.get jivlags with height is less than 160

let height = jivlags.filter((item) => {
  return item.height < 160;
});
console.log("height less than 160", height);
console.log("height length is", height.length); // height length is 3

// 3.get jivlags with female

let gender = jivlags.filter((item) => item.gender == "female");
console.log("gender ", gender);
console.log("gender length is", gender.length); // gender1 length is 1

// 4.get jivlags with male

let gender1 = jivlags.filter((item) => item.gender == "male");
console.log("gender1 ", gender1);
console.log("gender1 length is", gender1.length); // gender1 length is 5

// 5.get jivlags with hTown is mulshi

let homeTown = jivlags.filter((item) => item.hTown == "mulshi");
console.log("homeTown ", homeTown);
console.log("homeTown length is", homeTown.length); // height length is 2
