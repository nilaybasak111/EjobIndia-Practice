const http = require("http");

const port = 4000;

const data = [
  { id: 1, name: "Nilay" },
  { id: 2, name: "Nil" },
  { id: 3, name: "Tarun" },
  { id: 4, name: "Seema" },
  { id: 5, name: "Sayan" },
  { id: 6, name: "Kartik" },
];

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(data));
  res.end();
});

server.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});
