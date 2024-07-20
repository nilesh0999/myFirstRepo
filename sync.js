// synchronous

console.log("one");
console.log("two");
console.log("three");
console.log("four");


// o/p= one two three four

// asynchronous

console.log("1");
setTimeout(()=>{
    console.log("2");  
},5000)
console.log("3");
console.log("4");


/* o/p= 1    
        3    
        4    
        2 ( 5 sec later print 2)*/
