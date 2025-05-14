const http = require("http");
const port = 8080;

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    /////////////////////////
    /////////////////////////
    /////////////////////////
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, GET!");
  } else if (req.method === "POST") {
    /////////////////////////
    /////////////////////////
    /////////////////////////
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, POST!");
  } else if (req.method === "PUT") {
    /////////////////////////
    /////////////////////////
    /////////////////////////
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, PUT!");
  } else if (req.method === "DELETE") {
    /////////////////////////
    /////////////////////////
    /////////////////////////
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, DELETE!");
  } else if (req.method === "PATCH") {
    /////////////////////////
    /////////////////////////
    /////////////////////////
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, PATCH!");
  } else if (req.method === "OPTIONS") {
    /////////////////////////
    /////////////////////////
    /////////////////////////
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, OPTIONS!");
  } else if (req.method === "HEAD") {
    /////////////////////////
    /////////////////////////
    /////////////////////////
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end();
  } else {
    /////////////////////////
    /////////////////////////
    /////////////////////////
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

server.listen(port, () => {
  console.log(`HTTP server is listening on port ${port}`);
});
