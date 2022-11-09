// Streams are object that let you read data from a source 
// or write data to a destination in continours fashion 
// In node.js there are 4 types of streams
//  1. Redable - stream which is used for read operation
//  2. writable - which is used for write operation
//  3.Duplex - which is used for both read and write operation
//  4.Transform - a type of diplex where output is based on input


// so this is going to be normal way 
// stram method is at 2.index.js
const fs = require ("fs");
const http = require("http");
//creating server 
const server=http.createServer();
server.on("request",(req,res)=>{
    var fs = require("fs");
    fs.readFile("data.txt", (err,data)=>{
        if(err) return console.error(err);
        res.end(data.toString());
    });
});

//listen server
server.listen(8000,"127.0.0.1");