
function greet(name,cls){
    console.log("Good Morning" +" "+name+" "+cls);
}
interval=setInterval(greet,2000,"All","students")
// console.log(interval);
clearInterval(interval)

function greet(name,cls,member){
    setInterval(()=>console.log("Good Morning" +" "+name+" "+cls+" "+member),2000);
}
    greet("10th class","All","students")

    clearInterval();

    function fun1(name){
        id=setInterval(()=>{
            console.log(`hello ${name}.`);
        },2000)
    }
    
    fun1("laxi");

     clearInterval(id)   /* here fun1 function Runs but doesn't show o/p 
                 because we store setinterval in another variable(id)
                 & that id using clearInterval(inside that store that variable name (id))
                 we stop the setInterval  */  
    