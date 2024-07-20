
let arr=[1,0,25,0,35,0,4,0,5]

// array sort using for loop 
// for(var i=0;i<arr.length;i++){
//     for(var j=0;j< i;j++){
//         if(arr[i] < arr[j]){
//             var op=arr[i];
//             arr[i]=arr[j];
//             arr[j]=op
//         }
//     }
// }
// console.log("arr",arr);

// console.log("zArray",zArray);

// let fArray=[...zArray,...nArray]
// console.log("fArray",fArray);

// array sort method
// let result=arr.sort((a,b)=>{
//     return a-b;
// })
// console.log("result",result);

/* output by using sort method change positions of elements
result [
  0, 0,  0,  0, 1,
  4, 5, 25, 35    
]
*/

// let zeroArr=[];
// let numArr=[];

// let newArr=arr.map((item)=>{
//     if(item === 0){
//         return zeroArr.push(item);
//     }else{
//         return numArr.push(item);
//     }
// })
// let fResult=[...zeroArr,...numArr]
// console.log("fResult",fResult);

/* output without changing position
fResult [
   0,  0, 0, 0, 1,
  25, 35, 4, 5    
]
*/

// let result=arr.map((item,index)=>{
//     if(item === 0 ){
//         zeroArr.push(item)
//         // arr.splice(index,1).
//         // zeroArr.unshift()
//     }
//     let fResult=[arr,...zeroArr]
//     console.log("fResult",fResult);
// })

// console.log("numArr",numArr);

// swap two numbers

let a=1;
let b=2;

let c=a;
a=b;
b=c;

// console.log("a",a);  2
// console.log("b",b);  1

let aa=10;
let cc=2;

aa=aa+cc;
cc=aa-cc;
aa=aa-cc;
console.log("aa",aa);
console.log("cc",cc);
