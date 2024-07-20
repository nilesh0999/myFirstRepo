function fun() {
    console.log("empty");
}
fun()

function fun1(a) {
    console.log("variables",a);

    let {x,y} = a;

    console.log(x,y)
}
fun1({x: 5,y:6})

// obj. disctructuring 

    // 1 st way

let std1={
    name : "nilesh",
    age : 22,
    quali : "bcs"
}

let {name,age,quali}=std1; //  with obj. disctructuring 
console.log(`my name is ${name},my age is ${age}, my qualification is ${quali}`);
console.log(`my name is ${std1.name},
             my age is ${std1.age},
             my qualification is ${std1.quali}`); // without distructuring


     // 2nd way
     
let std2={
    name1 : "akshay",
    age1 : 22,
    quali1 : "bcs"
}

let name1,age1,quali1;
    ({name1,age1,quali1}= std2)
    console.log(`my name is ${name1},my age is ${age1}, my qualification is ${quali1}`);

// obj. in object 

let std3={
    name2 : "sunny",
    age2 : 22,
    quali2 : "bsc",
    hobby : {
        first :"travelling",
        second : "playing",
        third : "trecking"
    }
}

let {name2,hobby:{third,second}}=std3;
console.log(`my name is ${name2},my hobby is ${second}, ${third}`);

// array distructuring

let  a=[5,6,9];
 
let [x,y,z] = a;

console.log(x,y,z)


