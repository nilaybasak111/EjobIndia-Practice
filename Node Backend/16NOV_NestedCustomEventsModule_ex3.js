const events = require("events");

const eventObject = new events.EventEmitter();

eventObject.on("onDisplay", (msg, num) => {
  console.log(msg);
  // Here we call the nested event
  eventObject.emit("onFact", num); //Nested Event Concept
});

eventObject.on("onFact", (value) => {
  let f = 1;
  for (i = 1; i <= value; i++) {
    f = f * i;
  }
  console.log("Factorial is :" + f);
});

eventObject.emit("onDisplay", "Welcome to My Custom Events Example", 6);
