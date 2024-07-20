
let stocks = {
    fruits: ["mango", "apple", "strawberry", "oranges"],
    liquid: ["ice", "milk"],
    holders: ["paper cup", "plastic bag"],
    toppings: ["cherry", "dryfruits"]
}

let is_shop_open = true;

function time(ms) {
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }else{
            reject(console.log("shop is closed"))
        }
    });
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`1. ${stocks.fruits[1]} was selected`);

        await time(1000)
        console.log("2. start the production");
        
        await time(2000)
        console.log("3. cut the fruit");
        
        await time(2000)
        console.log(`4. ${stocks.liquid[1]} was added.`);
        
        await time(1000)
        console.log("5. start the machine");
    
        await time(4000)
        console.log(`6. icecream has been put in ${stocks.holders[0]}`);
    
        await time(1000)
        console.log(`7. ${stocks.toppings[0]} is selected.`);

        await time(1000)
        console.log("8. serve an icecream");
      }

    catch(error){
        console.log("customer left",error);
    }

    finally{
        console.log("day ended shop is closed");
    }
}

kitchen();