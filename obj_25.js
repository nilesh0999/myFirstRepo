// add key value pair in object

let object = {
  name: "akshay",
  age: 23,
};

let INFO = Object.assign({ qualification: "TYBCS", name: "sunny" }, object); // using Object.assign method

console.log("INFO is", INFO);

/*  o/p=
        INFO is { qualification: 'TYBCS', name: 'akshay', age: 23 }
*/

object.phone_no = 9850317956; // using dot(.) notation

console.log(object);
/*  o/p=
        { name: 'akshay', age: 23, phone_no: 9850317956 }
*/
object["email"] = "akshay12@gmail.com"; // bracket notation

console.log(object);

/*  o/p=
        {
  name: 'akshay',
  age: 23,
  phone_no: 9850317956,      
  email: 'akshay12@gmail.com'
}    
*/
