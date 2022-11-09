// Events module 
// Node.js has a built in module , called "Events"
// where we can create- , fire- , and listen to be fired only one time using once.

// to make event we making it class
const EventsEmitter = require("events");

const event = new EventsEmitter();
// Defining what event will do ... this should come before calling ok?
// this is called listener function
event.on('sayMyname',()=>{
    console.log("My name is ");
});
// calling the event 
event.emit('sayMyname');
// concept :- emitter objects emit named events that cause previously registered
//            listener to be called 
// so emitter has 2 feature 
//      1.Emitting event name 
//      2.Registering and unregistering function 

// one emit can multiple callbacks 
event.on('sayMyname',()=>{
    console.log("Rahul Jha");
});

event.emit('sayMyname');