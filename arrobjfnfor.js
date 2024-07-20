// let arr = [
//   { fname: "nilesh", mname: "raju", lname: "gatala" },
//   { fname: "sunny", mname: "dasharath", lname: "khandagale" },
//   { fname: "akshay", mname: "deepak", lname: "chavan" },
// ];
// function fullname() {
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(`fullname is ${arr[i].fname} ${arr[i].mname} ${arr[i].lname}`);
//     let fullnm = `fullname is ${arr[i].fname} ${arr[i].mname} ${arr[i].lname}`;
//     console.log(fullnm);
//   }
// }

// fullname();


function logA() { console.log('A') }

function logB() { console.log('B') }

function logC() { console.log('C') }

function logD() { console.log('D') }

 

logA();

process.nextTick(logB, 0);

Promise.resolve().then(logC);

logD();