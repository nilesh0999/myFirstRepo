
// e.g 1 for in loop 

// traditional for loop 


let info={
    nm : "vinu",
    ag : 22,
}

for (let i = 0; i < Object.keys(info).length; i++) {
    const element = info[Object.keys(info)[i]];
    console.log("elements in objects",element);
}

// iterating Object using for in loop

let objects={
    name: "vinayak",
    age: 20,
    hobbies : "mobile repairing"
    }

for(let key in objects){
    console.log(objects[key]);  // only shows object values
    console.log({[key]:objects[key]});  // gives object key value pair in o/p
}
/* o/p =

 vinayak
 20
 mobile repairing
 
 { name: 'vinayak' }
{ age: 20 }
{ hobbies: 'mobile repairing' }

 */


// e.g 2 for in loop use string

let mystring= "This is my string";

for(let char in mystring){
    console.log(mystring[char]);
}

/*  o/p =
T
h
i
s

i
s

m
y

s
t
r
i
n
g

*/