
function detail(array){
    let i=0;
    let fullname=[arr.length];
    while(i<arr.length)
    {
        fullname[i]=`${arr[i].fname} ${arr[i].lname}`;
        i++;
    }
    return fullname;
}

let arr=[
    {fname:"laxi", lname:"fernandis"},
    {fname:"sunny", lname:"sing"},
    {fname:"nilesh", lname:"gatala"}]

let value= detail(arr);
console.log(value);



// function detail(array){
//     let person1=`${arr[0].fname} ${arr[0].lname}`;
//     let person2=`${arr[1].fname} ${arr[1].lname}`;
//     let person3=`${arr[2].fname} ${arr[2].lname}`;
//     return{person1,person2,person3}
// }

// let arr1=[
//     {fname:"laxi", lname:"fernandis"},
//     {fname:"sunny", lanme:"sing"},
//     {fname:"nilesh", lname:"gatala"}]

// let value1= detail(arr1);
// console.log(value1);

let a="javascript";
console.log(a.length)
