function f1(){
   obj1={
       id :101
    };
    console.log(obj1);
    f2();   // calling f2
    obj2={    
        contact_no : 123354,
        email : "nilgatala@gmail.com"
    };
    console.log(obj2);
}

function f2(){
   obj3={
    first_name : "nilesh",
    last_name : "gatala"
    };
    console.log(obj3);
}
f1(); // calling f1
   
    /*  o/p =
    {id: 101 }
    {first_name: 'nilesh', last_name: 'gatala' }
    {contact_no: 123354, email: 'nilgatala@gmail.com' } */