var eee ="you are baka"
console.log(eee);

// this is module wrapper 
// normal code in js is converted to this
// if we delcare it manually , it acts as a private class 
// variable data cant be accessed outside 

(function () {
    const ee = "2nd line"
    console.log(ee);
})();
console.log(eee);