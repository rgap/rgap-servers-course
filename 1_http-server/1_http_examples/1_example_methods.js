const http = require("http"); // Import the http module
const port = 8080; // Define the port to listen on

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    // Handle GET requests
    res.writeHead(200, { "Content-Type": "text/plain" }); // Set response headers
    res.end("Hello, GET!"); // Send the response
  } else if (req.method === "POST") {
    // Handle POST requests
    res.writeHead(200, { "Content-Type": "text/plain" }); // Set response headers
    res.end("Hello, POST!"); // Send the response
  } else if (req.method === "PUT") {
    // Handle PUT requests
    res.writeHead(200, { "Content-Type": "text/plain" }); // Set response headers
    res.end("Hello, PUT!"); // Send the response
  } else if (req.method === "DELETE") {
    // Handle DELETE requests
    res.writeHead(200, { "Content-Type": "text/plain" }); // Set response headers
    res.end("Hello, DELETE!"); // Send the response
  } else if (req.method === "PATCH") {
    // Handle PATCH requests
    res.writeHead(200, { "Content-Type": "text/plain" }); // Set response headers
    res.end("Hello, PATCH!"); // Send the response
  } else if (req.method === "OPTIONS") {
    // Handle OPTIONS requests
    res.writeHead(200, { "Content-Type": "text/plain" }); // Set response headers
    res.end("Hello, OPTIONS!"); // Send the response
  } else if (req.method === "HEAD") {
    // Handle HEAD requests
    res.writeHead(200, { "Content-Type": "text/plain" }); // Set response headers
    res.end(); // Send the response (no body for HEAD)
  } else {
    // Handle other methods
    res.writeHead(405, { "Content-Type": "text/plain" }); // Set response headers
    res.end("Method Not Allowed"); // Send the response
  }
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`HTTP server is listening on port ${port}`);
});
