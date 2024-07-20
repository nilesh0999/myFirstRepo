
//  iterate through an object using for-in loop

let student={
    name:"yashika",
    cls:10,
    age:15
}
for(let info in student){
    // console.log(student[info]); 
/* yashika
    10
    15*/
    console.log(`${info} = ${student[info]}`);
}

/* o/p = 
 name = yashika
 cls = 10
 age = 15
*/

// update values of properties using foe-in loop

let salaries={
    shani : 45000,
    nagesh : 50000,
    sid : 60000
}
for (let name in salaries){
    let salary="$" + salaries[name];
    console.log(`${name} : ${salary}`);
}

/*shani : $45000        
nagesh : $50000       
sid : $60000*/

//  iterate array using for-in

let lang=["js","c","c++","java"];

for(let l in lang){
    console.log(lang[l]);
}
// js,c,c++,java

