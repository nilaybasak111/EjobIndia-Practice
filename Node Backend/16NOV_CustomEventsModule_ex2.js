const events = require("events");

// create an event object
const eventObject = new events.EventEmitter();

// .on method is used to add a listener.
// First argument is the event name. Second argument must be a callback/arrow function
eventObject.on("onCheck", (num) => {
  if (num % 2 == 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
});

// .emit will fire or trigger the event
eventObject.emit("onCheck", 40);
eventObject.emit("onCheck", 45);
