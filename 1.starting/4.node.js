// os module in  node js
const os = require ("os");

//tells the architecture of os whether its 32 bit or 64 bit 
console.log(os.arch());

//tells how much free ram we hav 
const freememo = os.freemem();
console.log(`${freememo/1024/1024/1024}`);
//similarly toralmem tells the total number of bytes present 
// note that the data given is in bits 

//tells the pc names 
console.log(os.hostname());


//tells the platform
console.log(os.platform());


