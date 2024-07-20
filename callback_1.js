    //  using callback make a juicebar  

let juiceBar={
    fruits : ["apple","mango","strawberry","watermelon"],
    liquid : ["ice","water"],
    holder : ["cup","plastic bag"],
    toppings : ["cherry","chocolate","peanuts"]   
}
//  we have to access the objects then 
//  console.log(juiceBar.fruits[2]);    // strawberry

// function 1

let order=(fruit_nm,call_prod)=>{
    setTimeout(function(){  // normal function
        console.log(`cust select a ${juiceBar.fruits[fruit_nm]} fruit.`);
    call_prod();    //o/p= mango was selected production has started
    },2000);
   // call_prod();  o/p = production has started mango was selected
}

// function 2

let production=()=>{
    // step 1   : production has started

     setTimeout(()=>{                    // arrow function
        console.log("step 1: production has started.");
     // step 2 : cut the friuts

        setTimeout(()=>{    // arrow function
            // console.log("step 2: the fruits has been chopped.");
            console.log(`step 2: ${juiceBar.fruits[2]} has been chopped.`);
    // step 3   : select the liquid

        setTimeout(()=>{
            console.log(`step 3: ${juiceBar.liquid[1]} and ${juiceBar.liquid[0]} was added.`);
    // step 4   :   start the machine

                setTimeout(()=>{
                    console.log("step 4: mixxer has been started.");
    // step 5   :   select the holders 

                    setTimeout(()=>{
                        console.log(`step 5: juice was placed in ${juiceBar.holder[0]}.`);
    // step 6 : select the toppings

                        setTimeout(()=>{
                            console.log(`step 6: ${juiceBar.toppings[0]} was added.`);
    // step 7 : serve your juice

                            setTimeout(()=>{
                                console.log("step 7: juice has been served.");
                             },2000);
                        },1000)
                    },5000)
                },1000)
             },1000);
        },3000);
    },0000);

}
order("2",production);