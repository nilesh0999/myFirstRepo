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

// *****map method*****

// 1. get array of all names

let names = jivlags.map((nm) => {
  return nm.name;
});
console.log("names are", names);

//names are ['shani polekar''nagesh swami''siddhesh kudale''anup sharma''nilesh gatala'sandhya swami']

// 2. get height of all members

let heights = jivlags.map((high) => {
  return high.height;
});
console.log("all members height are ", heights);

//all members height are  [ 156, 159, 160, 162, 170, 155 ]

// 3. get array of objects with just name & height properties

const modified = jivlags.map((item) => {
  //   return; //modified [ undefined, undefined, undefined, undefined, undefined, undefined ]
  return { name: item.name, height: item.height };
});

console.log("modified", modified);

// modified [{ name: 'shani polekar', height: 156 },{ name: 'nagesh swami', height: 159 },
// { name: 'siddhesh kudale', height: 160 },{ name: 'anup sharma', height: 162 },
//{ name: 'nilesh gatala', height: 170 },{ name: 'shandhya swami', height: 155 }]

// 4. get array of all first names

const fName = jivlags.map((item) => item.name.split(" ")[0]);
console.log("first name", fName);

//  first name [ 'shani', 'nagesh', 'siddhesh', 'anup', 'nilesh', 'shandhya' ]
