const url = require("url");

const myUrl =
  "https://drive.google.com/file/d/15vJA4EmGfRCMnGX87h3ijRTFIi3DUbz1/view";

// url Module is used to parse the url and return an object with different properties
const parsedUrl = url.parse(myUrl);
console.log("Parsed URL: ", parsedUrl);

console.log("Protocol: ", parsedUrl.protocol);
console.log("Hostname: ", parsedUrl.hostname);
console.log("Pathname: ", parsedUrl.pathname);
console.log("Query: ", parsedUrl.query);
