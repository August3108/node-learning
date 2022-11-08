//Json stands for javascript object notation 
//Json is light weight 
//format for storing and transforming data 
//json is often used when data is sent from a server to a web page

const biodata ={
    name : "ichi",
    age : 23,
    job : "frontend",
};

// now to convert this data into json 
const jsondata = JSON.stringify(biodata);
console.log(jsondata);

// now to convert it back to object 

const objdata=JSON.parse(jsondata);
console.log(objdata);