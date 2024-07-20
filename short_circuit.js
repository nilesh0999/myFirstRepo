
let data = {
    data: {}
};

let arr = [];

arr.push({
    name: "Akshay",
    age: 21
});

arr.push({
    name: "Nilesh",
    age: null
});

console.log(arr);       // [ { name: 'Akshay', age: 21 }, { name: 'Nilesh', age: null } ]

data.data['arr'] = arr;

console.log(true && "Test");

// && and ||

data && data.data && data.data.arr && data.data.arr.length > 0 && data.data.arr.map(element => {
    console.log("element", element)
}) 