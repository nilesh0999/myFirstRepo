// ternery operators
// example : 1
// if else
{
  let x1 = 15;
  x2 = 20;

  console.log(x1 > x2 ? "x1 is greater" : "x2 is greater");
}

// example : 2
// ladder if else
{
  let age = 23;
  console.log(
    age > 10 && age < 15
      ? "ur are in school"
      : age > 16 && age < 22
      ? "ur are in clg"
      : "u can do job"
  );
}

{
  let age = 23;
  //  console.log((age>10 && age<15)? "ur are in school"
  //  :(age>16 && age<22)? "ur are in clg"
  //  :"u can do job");
  age < 1 ? "not correct" : age == 23 ? "correct" : "last step";
}

// example : 3
// ladder if else
{
  let marks = 52;

  let result =
    marks > 75 && marks < 70
      ? "distingsion"
      : marks > 60 && marks < 70
      ? "firstclass"
      : marks > 45 && marks < 59
      ? "secondclass"
      : marks > 35 && marks < 44
      ? "pass"
      : "fail";

  console.log(result);
}

// example 4: nested if else
{
  let x = 19;
  let y = 111;
  let z = 70;

  let xyz =
    x > y
      ? x > z
        ? "x is greater"
        : "z is greater"
      : y > z
      ? "y is greater"
      : "z is greater";
  console.log(xyz);
}

// const getData = async (value) => {
//   await getValue();
//   await getNumbet();

//   if (!value) {
//     return "bfdf";
//   }
//   jkjnn;
//   console.log("value", value);
//   return "kfjhdj";
// };

// // console.log('first,',getData(6))
// let a = getData(7);
// console.log("a", a);
