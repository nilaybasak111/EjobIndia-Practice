const fs = require("fs");
const http = require("http");

const port = 4000;

const server = http.createServer((req, res) => {
  fs.readFile("./16NOV_ReadFile_Demo2.html", (error, data) => {
    try {
      if (error) throw new Error("Error While Reading File");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data.toString());
      res.end();
    } catch (error) {
      console.log(error);
    }
  });
});

server.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});
