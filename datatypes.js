//When adding a number and a string, JavaScript will treat the number as a string.

{
    let x=700000;
    let y='swift';

    let z=x+y;

    console.log(z);
}

// o/p = 700000swift

{

    let x=700000;
    let y='swift';

    let z=y+x;

    console.log(z);
}
// o/p = swift700000

/*JavaScript evaluates expressions from left to right. 
Different sequences can produce different results:*/
// example 1:
{
    let x=16-12+"sub";

    console.log(x);
}
// o/p = 4sub

// example 2:
{
    let x="add"+16+12;
    console.log(x);
}
// o/p = add1612

//JavaScript has dynamic types.
//This means that the same variable can be used to hold different data types:

{
    let x; // undefined
    x=5;    //number
    x="five"; //string

    console.log(x);
}
// o/p = five

// string ('")
{
    let f_name="nilesh";
    let l_name='gatala';

    console.log(f_name,l_name);
}
// o/p = nilesh gatala
{
    let f_name="nilesh";
    let m_name="raju";
    let l_name='gatala';

    console.log(f_name,m_name,l_name);
}
// o/p = nilesh raju gatala

// numbers
{
    let x1=25;//without decimal
    let x2=2.5;//with decimal

    console.log(x1,x2);
}
// o/p = 25 2.5

// boolean
{
    let a="1";
    let b=2;
    let c=1;

    console.log(a==b,a==c);
    console.log(a===b,a===c);
}
// o/p = false true
// o/p = false false

// array in js
{
    const city=[ "pune","mumbai",'delhi','chandighad','jammu' ];
    console.log(city);
    city_1=city[2];
    console.log(city_1);
}
// o/p = [ "pune","mumbai",'delhi','chandighad','jammu' ]
// o/p = delhi

// objects in js
{
    let person={name1:'nilesh',age:22,height:6.2,blood_grp:"o+"};
    console.log(person);
}
// o/p = { name1:'nilesh',age:22,height:6.2,blood_grp:"o+" }

//typeof operator
{
 console.log(
    typeof"js",
    typeof 1,
    typeof"html",
    typeof 2);
}
// o/p = string no string no

// undefined
{
    let car;
    console.log(car);
}

    let car=undefined;
    typeof car;
    console.log(car,typeof car);
    
// o/p = undefined undefined

    // empty values

{
    let car="";
    typeof car;
    console.log(car,typeof car);

}
// o/p = string


let s=5;
let h="5";
let i=5;
let shani=h+i+s
console.log(shani);