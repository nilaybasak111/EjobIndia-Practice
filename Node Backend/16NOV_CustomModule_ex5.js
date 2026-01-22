const events = require("events");

// create an event object
const eventObject = new events.EventEmitter();

eventObject.on("onFactor", (num) => {
  let f = 1;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  console.log("Factorial is :" + f);
});

eventObject.on("onPrime", (num) => {
  let count = 0;
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    console.log("Prime Number");
  } else {
    console.log("Not Prime Number");
  }
});

eventObject.on("onCount", (msg) => {
  const nonVowels = msg.match(/[^aeiou\s\W\d_]/gi);
  // Excludes vowels, whitespace, punctuation, digits, etc.
  const nonVowelCount = nonVowels ? nonVowels.length : 0;
  console.log("Non Vowel Count : " + nonVowelCount);
});

module.exports = {
  // You can access the all events from here just exporting the eventObject
  eventObject,
  // Or you can export the events separately
  fact: (num) => eventObject.emit("onFactor", num),
  prime: (num) => eventObject.emit("onPrime", num),
  count: (msg) => eventObject.emit("onCount", msg),
};
