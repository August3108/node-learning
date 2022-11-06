const fs = require("fs");

/*making folder 
fs.mkdir('foldername', (err)=>{
    console.log("folder has been created");
});

*/

// to delete file 
/*
fs.unlink("baka.txt", (err)=> {
    console.log("file died");
})
*/

//now deleting folder
fs.rmdir("foldername",(err)=>{
    console.log("folder was shot dead");
})