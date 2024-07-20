// synchronous

// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");
// console.log("five");

// asynchronous

// console.log("six");
// console.log("seven");
// setTimeout(() => {
//     console.log("eight");
// }, 5000);
// console.log("nine");
// console.log("ten");

 async function fun(){
    let newfun=setTimeout(()=>
    {
        console.log("print after 1 sec");
    },1000);
    let newfun1=setTimeout(()=>
    {
        console.log("print after 5 sec");
    },5000);
    let newfun2=setTimeout(()=>
    {
        console.log("print after 10 sec");
    },10000);
    let newfun3=setTimeout(()=>
    {
        console.log("print after 8 sec");
    },8000);
}

fun();

