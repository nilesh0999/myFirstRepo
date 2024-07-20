// //   while loop (entry control loop)

// let a=5;
// while(a<10){
//     // console.log("while loop",a);
//     a++;
// }

// // do while loop    (exit control loop)

// let b=11;
// do{
//     console.log("do while loop",b);
//     b++;
// }
// while(b<10)
let flag = true
let no = 11
let i = 2

for (i;i<no ; i++ ){
    if (no % i ==0){
        flag = false;
        break
    }
    else{
        flag=true
        continue
    }
}
if (flag == true) {
    console.log("number is prime");
}else{
    console.log("number is not prime");
}