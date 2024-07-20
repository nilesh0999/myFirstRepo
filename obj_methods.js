let sem1 = { phy: 35, chem: 39, maths: 38, bio: 40 };
let sem2 = { phy: 39, chem: 29, maths: 34, bio: 30 };

// assign method

let result = Object.assign({ maths: 45, eng: 40 }, sem2);

console.log(result);

// o/p= { maths: 34, eng: 40, phy: 39, chem: 29, bio: 30 }

// keys

let result1 = Object.keys(sem1);

console.log(result1);

// o/p = [ 'phy', 'chem', 'maths', 'bio' ]

// values

let result2 = Object.values(sem2);

console.log(result2);

// o/p= [ 39, 29, 34, 30 ]

// entries

let result3 = Object.entries(sem1);

console.log(result3);

// o/p= [[ 'phy', 35 ], [ 'chem', 39 ], [ 'maths', 38 ], [ 'bio', 40 ] ]

// seal

Object.seal(sem2);
sem2.bio = 50;
delete sem2;
console.log(sem2.bio);

// o/p= 50

Object.seal(sem2);
sem2.mara = 45;
console.log(sem2.mara);

// o/p= undefined

// freeze

let hero = Object.freeze(sem1);
sem1.chem = 45;
console.log(sem1.chem);

// o/p= 39

console.log("hero", Object.keys(hero).length);
