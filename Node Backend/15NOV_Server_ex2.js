const http = require("http");

const port = 4000;

// Creating A Server with Express
// Without http module We cannot create a server.
// We use Express to create a server without http module.
const server = http.createServer((req, res) => {
  // res.writeHead is used to write the response
  res.writeHead(200, { "Content-Type": "text/html" });
  // res.write is used to write the response
  res.write(`<h3>Welcome to My Node Server</h3>
                <ul>
                  <li>Hi</li>
                  <li>Hello</li>
                  <li>Welcome</li>
                </ul>`);
  res.write(`<p>Thank You Have A Nice Day</p>`);
  // res.end is used to end the response
  res.end();
});

// server.listen is used to start the server
server.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});
