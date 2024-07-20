
let stocks = {
    fruits: ["mango", "apple", "strawberry", "oranges"],
    liquid: ["cold water", "milk"],
    holders: ["paper cup", "plastic bag"],
    toppings: ["cherry", "dryfruits"]
}

// let is_shop_open=true;

// promise syntax

// let order=()=>{

//     return new Promise((resolve,reject)=>{
//         if(true){
//             resolve()
//         }
//         else{
//             reject()
//         }
//      })
// }

// order()
// .then()
// .then()
// .then()
// .then()
// .then()
// .catch( )
// .finally( )

// async syntax

// async function order(){
//     try{}
//     catch(error){}
//     finally{
//         console.log("runs code anyways");
//     }
// }

// order()

let is_shop_open=true;

let toppings_choice=()=>{

    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            resolve(
                console.log("which topping u want"));
        },3000);
    });
};

async function kitchen(){
    console.log("1");
    console.log("2");
    console.log("3");

    await toppings_choice()

    console.log("4");
    console.log("5");
}

kitchen()

console.log("doing the dishesh");
console.log("cleaning the tables");
console.log("taking orders");