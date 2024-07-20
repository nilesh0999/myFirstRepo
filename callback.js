
function one(a,msg){
// msg();  //  akshay : i'm fine wau
            //  nilesh : how are u buddy
    console.log(`nilesh : how are u buddy & value of a is: ${a}`);
     msg(); // nilesh : how are u buddy
            // akshay : i'm fine wau
}

function two(){
    console.log("akshay : i'm fine wau");
}

one(1,two);

