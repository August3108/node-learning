// Task to do 
// 1. covert to json
// 2. add in different file
// 3. read file
// 4. Again convert it back to object 
// 5. print 
const { configConsumerProps } = require("antd/lib/config-provider");
const fs=require("fs");

// this is data 
const biodata ={
    name : "ichi",
    age : 23,
    job : "frontend",
};
//comverting data into json
const jsondata =JSON.stringify(biodata);
//creating and writing the file
fs.writeFile("2.json2.json", jsondata , (err)=> {
    console.log("done");
});
//reading the file we created 
fs.readFile("2.json2.json" , "utf-8", (err,data)=>{
    //converting back tio orignal object file 
    const ans =JSON.parse(data);
    //printing
    console.log(ans);
});
