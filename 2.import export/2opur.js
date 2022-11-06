//oper file
const add = (a,b) => {
    return a+b;
}
const sub = (a,b) =>
{
    return a-b;
}
const name = "rahul";
//export these 2 function
// we can change name before the = 
//      module.exports.addota = add;
// but after the = it have to be same 

//module.exports.add = add;
//module.exports.sub = sub;

//to import more in single line 
module.exports ={
    add,
    sub
};