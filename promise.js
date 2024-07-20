
// // function loct(subject){
// //     return new Promise((resolve,reject)=>{
// //         if(subject == "Maths"){
// //             resolve(`subject is ${subject}`);
// //         }else{
// //             reject(`subject is not found`)
// //         }
// //     })
// // }

// // console.log("promise",loct("Maths"));

// function test1(location) {
//     return new Promise((resolve, reject)=>{
//         if(location == 'Pune'){
//             resolve(`My current location is ${location}`);
//         }else{
//             reject(`location not found`);
//         }
//     })
// }

// console.log("test1",test1("Pune"));

// // function test2(response) {
// //     return new Promise((resolve, reject)=>{
// //         resolve(`Resolve response ${response}`)
// //     })
// // }

// // async function finalResponse() {
// //     try{
// //         let abc = await test1('Pune');
// //         let bcd = await test2(abc);
// //         console.log("bcd", bcd);
// //     }catch(err){
// //         console.log("err", err);
// //     }
    
// // }

// // finalResponse();

// let arr = [12, 25, 31, 23, 75, 81, 100]
// console.log(arr.sort(
//     function(a, b){
//         return b - a;
//     }))

let arr = ['nilesh', 'akshay', 'omkar', 'laxi']
arr.splice(2,0, 'santosh');

console.log(arr);
