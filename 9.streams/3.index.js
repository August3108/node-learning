const fs = require ("fs");
const http = require("http");
//creating server 
const server=http.createServer();
server.on("request",(req,res)=>{

    const rstream = fs.createReadStream("dc2.txt")
    //this is pipeline method 
    //rstream.pipe(where we want to show)
    rstream.pipe(res);


});

//listen server
server.listen(8000,"127.0.0.1");