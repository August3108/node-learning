const http = require("http");
// to create server
const server = http.createServer((req,res)=> {

// setting up the pages for for "/"
if(req.url=="/")
    {
        res.end("hello from other side");
    }
else if(req.url=="/contact")
    {
        res.end("contact us is avaialable ")
    }
// now to set the page to throw error if the page is not avalaible
else {
    res.writeHead(404,{"Content-type":"text/html"});
    res.end("<h1>404 error.</h1> Page does not exist")
}

});

server.listen(9000,"127.0.0.1", ()=>{
    console.log("listening ur request at 9000")
});