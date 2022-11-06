const fs = require("fs");
//node js doesnt understand async function
fs.writeFile('2.node.txt',"this is node 2 data ",(err)=>{
    console.log("first line");
    //now if we want to check error we do this... null means no error
    console.log(err);
});
// we pass them a function as an arguement 
// thatr gets called when the tasj completes 
//the callback has an agrement that tells u whther
// the operation is successfully completed
//now we need to sat what to do when fs.writeFile
//has copmpleted and start checking for error


//now to add more content 
fs.appendFile('2.node.txt',
" &&&& 2nd line of data has been added ",(err)=>{
    console.log("2nd line");
});

fs.readFile('2.node.txt',(err , data)=> {
    //now this will give buffer data
    console.log(data);
} );
// to have this data in format of string we simply add UTF-8
fs.readFile('2.node.txt','UTF-8',(err , data)=> {
//this will give data in normal string format 
    console.log(data);
} );


//notes 
// read about asynchronous and synchronus and how it work in node
// which to prefer?

