let students = ["nilesh", "sunny", "akshay", "riyaz"];

students.forEach(function (name) {
  console.log("name are", name);
});

/* o/p =

name are nilesh
name are sunny   
name are akshay  
name are riyaz 
*/

students.forEach(function (name, index) {
  // console.log("name are",name + " "+ "array index is",index);
  console.log(`name is ${name}, & that array index is ${index}`);
});

/*  o/p = in for each loop we use function here we print "value as well as index no of array"

name are nilesh array index is 0
name are sunny array index is 1 
name are akshay array index is 2
name are riyaz array index is 3 
*/
