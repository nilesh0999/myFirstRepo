let obj=Object.create({})

let finalObj=Object.assign({name:"anil",age:25},obj);

// console.log("finalObj",finalObj);    // finalObj { name: 'anil', age: 25 }

let {name}=finalObj;

console.log("name",name);

// let mySub=[5,6,8,9];
// console.log("ind3",ind3);


let sem1={phy:35,chem:39,maths:38,bio:40}
let sem2={phy:39,chem:29,maths:34,bio:30};

// 1. assign method

let result=Object.assign({maths:45,eng:40,mar:40},sem2);

console.log(result);

// o/p= { maths: 34, eng: 40, phy: 39, chem: 29, bio: 30 }

// we cannot modify object values in assign method.
// we can add key value pair in object using assign method

// 2. keys 

let result1=Object.keys(sem1);

console.log(result1);

// o/p = [ 'phy', 'chem', 'maths', 'bio' ]

// 2. values

let result2=Object.values(sem2);

console.log(result2);

// o/p= [ 39, 29, 34, 30 ]

// 3. entries

let result3=Object.entries(sem1);

console.log(result3);

// o/p= [[ 'phy', 35 ], [ 'chem', 39 ], [ 'maths', 38 ], [ 'bio', 40 ] ]


for(let [key, value] of Object.entries(sem1)){
    console.log("item", {[key]: value})
}

// it prints objects keys with values
//  item { phy: 35 } item { chem: 39 }  item { maths: 38 }  item { bio: 40 }


// 4 . seal

Object.seal(sem2);
sem2.bio=50;
delete sem2.bio; 
console.log(sem2.bio);

// o/p= 50

Object.seal(sem2);
sem2.mara=45;
console.log(sem2.mara);

// o/p= undefined

// freeze

Object.freeze(sem1);
sem1.chem=45;
console.log(sem1.chem);

// o/p= 39


