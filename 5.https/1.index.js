// creating basic http server

// nodee js provide capabilities to create our own webserver which will handle HTTP req
// these request are handled asynchronously
// we can use apache or IIS to run Node.js
// but its recommended to use Node.js webserver 

// The http.CreateServer() method includes request and response paramater
// which is supplied by Node.js
// the request object can be used to send a response for a current http request
// if the response from the http server is supposed to be displayed as HTML.
// we shgould include an http header with correct content type  

// program- 
// to create a http server in client we need to require http modules 
const http = require("http");
// to create server
const server = http.createServer((req,res)=> {
    // to know server is working we set a general response
    // it is displayed at localhost8000
    res.end("hello from other side");
});
// now to listen the request
// here 9000 is port number
// and the other one is adding ip address
server.listen(8000,"127.0.0.1", ()=>{
    console.log("listening ur request at 8000")
});