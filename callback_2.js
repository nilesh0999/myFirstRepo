let teaShop={
    teaType : ["black tea","milk tea","green tea","lemon tea"],
     ingre: ["tea powder","sugar","water","milk","lemon","green tea powder"],
     holder : ["cup","plastic bag"]
}

let order=(teanm,production)=>{
    setTimeout(()=>{
        console.log(`customer gives an order of ${teaShop.teaType[teanm]}.`);
        production();
    },2000)
    // production();
}

let production=()=>{
    
    setTimeout(()=>{
        console.log("turn on gas");
        setTimeout(()=>{
            console.log(`Add ${teaShop.ingre[2]} and Add ${teaShop.ingre[0]} and Add ${teaShop.ingre[1]}`);
             setTimeout(()=>{
                console.log(`last Add some ${teaShop.ingre[3]}`);
                 setTimeout(()=>{
                    console.log(`tea put in ${teaShop.holder[0]}`);
                    setTimeout(()=>{
                        console.log("give it to the customer");
                    },1000)
                 },3000)
            },10000)
        },2000)
    },1000)
}

order("1",production)