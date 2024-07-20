

let c= 2;
c = 3;      // primitive refferce 
console.log(c);     // o/p= 3


// how to add key value pair in objects

let vehical={
    vname : "bullet",
    vtype : 2
}
vehical.model=350; // using . notation

Object.assign(vehical,{price:10000}) // using assign method

vehical["colour"]="red"; // using bracket notation
    // key = value 

vehical["colour"]="black";      // new value assign

console.log(vehical);

/*
    {
  vname: 'bullet',
  vtype: 2,       
  model: 350,     
  price: 10000,   
  colour: 'black' 
    }
*/