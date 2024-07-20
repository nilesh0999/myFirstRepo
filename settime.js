
function greet(nm){
    setTimeout(()=>{
        console.log(`Hello Good Afternoon ${nm}`);
    },3000);
}
greet("laxi")

function greeet(name){
    console.log(`Hello Good Afternoon ${name}`);   // using template literals
    }

    timeOut= setTimeout(greeet,0000,"Nilesh");

    setImmediate(greeet,"omkar")
    // console.log(timeOut);

    clearTimeout(timeOut)