const fs = require("fs"); 
//fs is module 
//now we using writeFileSync to create a file 1.node.txt with content this is file of node...
fs.writeFileSync('1.node.txt',"this is file of node 1st file");
// now if we want to add after the above content , ill use appendFileSync
fs.appendFileSync('1.node.txt',"this is line 2 ");
// now i want to read files 
const buf_data =fs.readFileSync('1.node.txt');
console.log(buf_data);
//this gives output as buffer data type
//buffer is mainly used to store binary data 

orig_data = buf_data.toString();
console.log(orig_data);

//now to rename we use renameSync