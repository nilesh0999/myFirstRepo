class Demo {
  constructor(a, b) {
    this.a = a;
    this.b = b !== undefined ? b : 0;
  }
  getValues() {
    const cal = this.a + this.b;
    return cal;
  }

  setValues(x, y) {
    this.x = x;
    if (y !== undefined) {
      this.y = y;
    }
  }
}

const result = new Demo(8, 9);
const finalResult = result.getValues();
console.log("finalResult: ", finalResult);
const result1 = new Demo(89);
result1.setValues(50, 5);
const finalResult1 = result1.getValues();
console.log("finalResult1: ", finalResult1);

// this keyword

// class user {
//   name() {
//     return "hello world";
//   }
//   student() {
//     let getname = this.name();
//     console.log(getname);
//   }
// }

// let getuser = new user();
// getuser.student();
