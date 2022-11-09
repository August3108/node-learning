// Each type of stream is an EventEmitter instance and thriw several events 
// at different instances of time 
// data - event fired if data is available to read 
// end - this event is fired when there is no more data to read 
// error - this event is fired when there is any error in recieving or writing data 
// finish - the event is fired when all data has been flused to underlying system

// in stream method we need to read data in chunks and not continous
const fs = require ("fs");
const http = require("http");
//creating server 
const server=http.createServer();
server.on("request",(req,res)=>{

    const rstream = fs.createReadStream("dc2.txt")

    //keeep calling when there is data to read
    rstream.on("data",(chunkdata)=>{

        res.write(chunkdata)
    });

    rstream.on("end",() => {
        res.end();
    });

    // if file is missing 
    rstream.on("error",(err) => {
        console.log(err);
        res.end("file is missing");
    });

});

//listen server
server.listen(8000,"127.0.0.1");