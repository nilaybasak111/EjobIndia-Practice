const http = require("http");
const fs = require("fs");

const port = 4000;

const server = http.createServer((req, res) => {
  fs.readFile("./16NOV_Demo2.html", (error, data) => {
    if (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.write("Error reading file");
      res.end();
      return;
    }
    console.log(data.toString());
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data.toString());
    res.end();
  });
});

server.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});
