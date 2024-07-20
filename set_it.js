const bike = () =>{
    console.log("first");
}
const home = () =>{
        setTimeout(() => {
                console.log("second2222")
        }
        ,5000);
}
const car = () =>{
    console.log("third");
}

bike();
home();
car();

        // o/p = first
        // third
        // after 1 sec second 


const bike1 = () => console.log("first");
const car1 = () => setInterval(() => console.log("second"),2000);
const home1 = () => console.log("third");

bike1();
car1();
home1();

//  o/p = third
        // first
        // every 2 sec after print second
