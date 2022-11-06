// path module node js
// path module provides utilities for working with file and directory path

const path = require ("path");

//this gives the file address 
console.log(path.dirname("/Users/rahuljha/Desktop/projects/5.node.js"));

//this gives file extension name 
console.log(path.extname("/Users/rahuljha/Desktop/projects/5.node.js"));

//this gives file name
console.log(path.basename("/Users/rahuljha/Desktop/projects/5.node.js"));

//it return all the data , root , dir, base, extention , basename
console.log(path.parse("/Users/rahuljha/Desktop/projects/5.node.js"));


//so if we want we can store it in a variable
const mydata =path.parse("/Users/rahuljha/Desktop/projects/5.node.js");
// now we can print what we need 
console.log(mydata.name);