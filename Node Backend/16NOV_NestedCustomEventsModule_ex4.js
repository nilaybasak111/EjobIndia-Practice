const events = require("events");

const eventObject = new events.EventEmitter();

// Display the message on the console & call the nested event onCount
eventObject.on("onShow", (msg) => {
  console.log(msg);
  // Here we call the nested event
  eventObject.emit("onCount", msg);
});

// Count the number of words & vowels
eventObject.on("onCount", (msg) => {
  console.log("Word Count : ", msg.split(" ").length);
  console.log("Vowel Count : ", msg.match(/[aeiou]/gi).length);
});

eventObject.emit("onShow", "Welcome to My Custom Events Example");
