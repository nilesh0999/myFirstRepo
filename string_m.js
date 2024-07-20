//  string methods

let str1 = "javascript";

//  1) .length  (gives length of string)

let result1 = str1.length;

console.log("result1", result1); //  10

//  2)  .charAt()   (in this method shows which index which value is present)

let result2 = str1.charAt(5);

console.log("result2", result2); //  c

//  3)  .charCodeAt()   (this method gives binarycode of single alphabate)

let result3 = str1.charCodeAt(9);

console.log("result3", result3); //  116

//  4)  .slice(start,end) extracts a part of a string and returns the extracted part in a new string.

let str2 = "sunny,akshay,nilesh";

let result4 = str2.slice(6, 12);

console.log("result4", result4); //  akshay

//  5)  .substring() same as slice method

// The difference is that the second parameter specifies the length of the extracted part.
//  let str2 = "sunny,akshay,nilesh";
// let result5 = str2.substring(5, 6);
let result5 = str2.substr(5, 6);
console.log("result5", result5); //  sunny

//  6)  .replace() method replaces a specified value with another value in a string:

let comment = "akshay is a rider.";

let newcomment = comment.replace("rider", "software developer");

console.log("new comment is", newcomment);

//  7)  .toUpperCase()  A string is converted to upper case with toUpperCase():

let tuc = comment.toUpperCase();

console.log("toUpperCase", tuc); // toUpperCase AKSHAY IS A RIDER.

//  8)  .toLowerCase()  A string is converted to upper case with toLowerCase():

let comment1 = "SUNNY IS GOOD LEADER";

let tlc = comment1.toLowerCase();

console.log("toLowerCase", tlc); // toLowerCase sunny is good leader.

//  9) concat() method can be used instead of the plus operator. These two lines do the same:

let batch1 = "NAS";
let batch2 = "LAJOS";

let combine = batch1.concat(" ", batch2);

console.log("concat", combine);
