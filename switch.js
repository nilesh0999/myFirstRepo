let a = 5;
let b = 10;
// let c = 15;

let ch = 2;
switch (ch) {
  case 1:
    x = a + b ;
    return console.log(x);
    break;

  case 2:
    y = a - b;
    return console.log(y);
    break;

  case 3:
    z = a * b;
    return console.log(z);
    break;

  case 4:
    q = a / b;
    return console.log(q);

  default:
    console.log("invalid choice");
}
