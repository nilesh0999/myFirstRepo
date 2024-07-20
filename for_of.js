// for of loop 

let students=["nilesh","vinayak","akshay","sunny"]
for(let name of students){
    console.log(name);
}
/*  o/p = 
nilesh
vinayak
akshay  
sunny */

for(let name in students){
    console.log(name);
}

/*  o/p =   its gives array index
0      
1      
2      
3   */


let mystring= "This is my string";

for(let char of mystring){
    console.log(char);
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

let arr=[35,39,45,30]
for(let marks of arr){
    // console.log(arr[marks]);    // undefined
    console.log(marks); //  35,39,45,30
}
 