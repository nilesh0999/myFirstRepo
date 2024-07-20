// 1. for loop

let bikes=["r15","passion","shine","fz"];

let mybike= " ";

for(let i=0;i<bikes.length;i++)
    {
      mybike += bikes[i]+" ";
    }

console.log("treading bikes are",mybike);

    // op = treading bikes are  r15 passion shine fz 

// 2. for in 

    //  using objects

let stds={
    std1 : "nilesh",
    std2 : "sunny",
    std3 : "akshay" 
}

let batch = " ";

for(let js /*(key)*/ in stds /*(array)*/){
    batch += stds[js]+" ";
//  var2 += var(key)
}
console.log(batch);

    // op =  nilesh sunny akshay 

// for in using array   

let age=[22,21,23];

let ages=" ";

for(let ag in age){             
    ages += age[ag]+" ";
}
console.log(ages);

    // op =  22 21 23 


