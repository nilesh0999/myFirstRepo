let obje={
    a:"nilesh",
    b:12,
    c:[10,2,6,5],
    d:{
        ab:15
    },
    e:function sum(a,b) {
        console.log("sum of",a+b);
    }
}

for(let keys in obje){
    if(keys =="e" ){
        console.log(obje[keys](5,6));
    }
    else{
        console.log(obje[keys]);
    }
}

for(let key of Object.entries(obje)){
    console.log(key);
}


/* 
    [ 'a', 'nilesh' ]
    [ 'b', 12 ]
    [ 'c', [ 10, 2, 6, 5 ] ]
    [ 'd', { ab: 15 } ]
    [ 'e', [Function: sum] ] 
*/

console.log(obje.e(5,6));   // sum of 11