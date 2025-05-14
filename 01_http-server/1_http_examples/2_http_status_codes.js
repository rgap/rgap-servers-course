const http = require("http");
const port = 8080;

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.url === "/success") {
    /////////////////////////
    // Handle requests to the /success endpoint
    /////////////////////////
    res.writeHead(200, { "Content-Type": "text/plain" }); // Set response headers
    res.end("Success"); // Send a 200 OK response
  } else if (req.url === "/notfound") {
    /////////////////////////
    // Handle requests to the /notfound endpoint
    /////////////////////////
    res.writeHead(404, { "Content-Type": "text/plain" }); // Set response headers
    res.end("Not Found"); // Send a 404 Not Found response
  } else if (req.url === "/error") {
    /////////////////////////
    // Handle requests to the /error endpoint
    /////////////////////////
    res.writeHead(500, { "Content-Type": "text/plain" }); // Set response headers
    res.end("Internal Server Error"); // Send a 500 Internal Server Error response
  } else {
    /////////////////////////
    // Handle all other requests
    /////////////////////////
    res.writeHead(400, { "Content-Type": "text/plain" }); // Set response headers
    res.end("Bad Request"); // Send a 400 Bad Request response
  }
});

server.listen(port, () => {
  console.log(`HTTP server is listening on port ${port}`);
});
