const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=> {
    if(req.url=="/")
    {
        res.end("hello from other side");
    }
else if(req.url=="/api")
    {
        fs.readFile("data.json","utf-8",(err,data)=>{
            res.end(data);
        })

    }
});

server.listen(8000,"127.0.0.1", ()=>{
    console.log("listening ur request at 8000")
});