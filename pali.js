let str="nan";
let len=str.length;
let op="palindrome no.";
for(let i=0;i<len/2;i++)
{
    // console.log(str[i]);
    // console.log(str[len-1-i]);
    if(str[i] != str[len-1-i]){
        op="not palindrome no";
    }
    console.log(`${str}: ${op}`);
}

// let num="132";
// let arr=[];
// console.log(num.split(','))
// arr.push(num)
// let leng=arr.length;
// for(let j=0;j<leng/2;j++)
// {
//     // console.log(arr[j] != arr[leng-1-j]);
//     console.log(arr[j]);
//     if(arr[j] != arr[leng-1-j])
//     {
//         console.log(`${arr[j]} "not a palindrome number"`);
//     }
//     console.log(`${arr[j]} "it is a palindrome number"`);
// }
