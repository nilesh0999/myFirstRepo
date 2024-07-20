Promise.resolve()
  .then(function a() {
    console.log("1");
    Promise.resolve().then(function d() {
      console.log("2");
    })
    Promise.resolve().then(function e() {
      console.log("3");
    })
    // throw new Error('Error!')/
    throw new Error(console.log('Error!'))
    Promise.resolve().then(function f() {
      console.log("4");
    })
  })
  .catch(function b() {
    console.log("A");
  })
  .then(function c() {
    console.log("B");
  })



  
function logA() { console.log('A') }

function logB() { console.log('B') }

function logC() { console.log('C') }

function logD() { console.log('D') }

 

logA();

process.nextTick(logB, 0);

Promise.resolve().then(logC);

logD();