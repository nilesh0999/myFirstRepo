// 1.Nested Function

//  outer function
function greet(name) {
  //  inner function

  function displayName() {
    // console.log("hi my name is" + " " + name);   // without template literals
    console.log(`hello my name is ${name}.`); // with template literals
  }
  displayName(); // calling inner function
}
greet("Nilesh"); //   calling outer function

//  2.Returning Function
{
  function greet(name) {
    function displayName() {
      console.log(`Hello I Am ${name}.`);
    }
    // returning function
    return displayName;
  }
  let G1 = greet("Koustubh");
  console.log(G1); // [Function: displayName]
  G1(); //  Hello I Am Koustubh.
  //   greet("Koustubh");
}

//  closure

{
  function greet() {
    // variable defined outside the inner function
    let name = "jayashree";
    //  inner function
    function show() {
      return `hello ${name}.`;
    }
    return show();
  }
  const g1 = greet();
  console.log(g1); //  hello jayashree.
  // g1();
}
