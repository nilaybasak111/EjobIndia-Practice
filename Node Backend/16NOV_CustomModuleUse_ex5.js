const output = require("./16NOV_CustomModule_ex5");

// You can access the events separately
output.fact(5);
output.prime(30);
output.count("Welcome to My Custom Module with Custom Events");

// You can also access the events by using eventObject
output.eventObject.emit("onFactor", 10);
output.eventObject.emit("onPrime", 7);
output.eventObject.emit("onCount", "My Custom Module with Custom Events");
