function outerfunction(a,b)
{
    function innerfunction(a,b)
    {
        return a+b;
    }
    let add=innerfunction(a,b)
        return add;
}
console.log(outerfunction(10,3));

// o/p = 13

function person(f_name,l_name){
    function fullname(f_name,l_name){
     return f_name+l_name;
    }
    let info=fullname(f_name,l_name)
    return info;
}
console.log(person("nilesh ","gatala"));

// o/p= nilesh gatala

function myMarks(maths,bio,chem,phy)
{
    const myNewMaths=maths+20;
    const myNewBio=bio+20;
    const myNewChem=chem+20;
    const myNewPhy=phy+20;

    return myMarks= `"my maths marks is ${myNewMaths}",
    "my bio marks is ${myNewBio}",
    "my chem marks is ${myNewChem}",
    "my maths marks is ${myNewPhy}".`;
}

console.log(myMarks(29,36,32,30));

// o/p =

// "my maths marks is 49",
//     "my bio marks is 56",
//     "my chem marks is 52",
//     "my maths marks is 50".

// function call another function

const name = "Jonas";

const first = () => {
    let a = 1;
    console.log("first")
    let b =  second(7,10);
    console.log("second", b)

    a = a + b;
    return a;   
}

function second(x,y){
    let c = y-x;
    console.log("third")
    return c;
}
// first();

console.log("Test", first())