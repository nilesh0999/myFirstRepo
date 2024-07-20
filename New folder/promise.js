function test1(location) {
    return new Promise((resolve, reject)=>{
        if(location == 'Pune'){
            resolve(`My current location is ${location}`);
        }else{
            reject(`location not found`);
        }
    })
}

function test2(response) {
    return new Promise((resolve, reject)=>{
        resolve(`Resolve response ${response}`)
    })
}

async function finalResponse() {
    try{
        let abc = await test1('Pune');
        let bcd = await test2(abc);
        console.log("bcd", bcd);
    }catch(err){
        console.log("err", err);
    }
    
}

finalResponse();