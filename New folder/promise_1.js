
let stocks = {
    fruits: ["mango", "apple", "strawberry", "oranges"],
    liquid: ["cold water", "milk"],
    holders: ["paper cup", "plastic bag"],
    toppings: ["cherry", "dryfruits"]
}
let is_shop_open = false;

let order = (work,time) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            },time);
        }else {
            reject(console.log("sorry sir our shop is closed."));
        }
    });
};

order(() => console.log(`${stocks.fruits[2]} was selected.`),2000)

.then(()=>{ 
    return order(()=>console.log("production was started."),1000)
})

.then(()=>{
    return order(()=>console.log("the fruit has been chopped."),2000)
})

.then(()=>{
    return order(()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} selected.`),2000)
})

.then(()=>{
    return order(()=>console.log("start the machine."),1000)
})

.then(()=>{
    return order(()=>console.log(`icecream has been put in ${stocks.holders[0]}.`),5000)
})

.then(()=>{
    return order(()=>console.log(`${stocks.toppings[0]} was selected.`),1000)
})

.then(()=>{
    return order(()=>console.log("icecream has been served."),1000)
})


.catch(()=>{
    console.log("customer left");   // only runs when our condition was rejected
})

.finally(()=>{
    console.log("day ended shop is closed"); // always run either our condition is true or false
})