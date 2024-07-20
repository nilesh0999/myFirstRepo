// example : 1

// let fact=1;
// for(let n=6;n>=1;n--)
// {
//     fact=fact *n;
//     console.log(fact);
// }

// example : 2
let num=4;
let fac=1;
for(let b=1;b <= num;b++){
    fac=fac * b;
}
console.log(fac);

// example : 3

let factorialOf = n => {
    let factorial = 1;
  
    for(let i = 1; i <= n; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  console.log(factorialOf(4));
  console.log(factorialOf(8));