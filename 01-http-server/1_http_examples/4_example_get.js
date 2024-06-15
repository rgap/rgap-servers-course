const http = require("http"); // Import the http module
const port = 8080; // Define the port to listen on

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    // Handle GET requests to the root URL
    res.writeHead(200, { "Content-Type": "text/plain" }); // Set response headers
    res.end("Hello, GET!"); // Send the response
  } else {
    // Handle other requests
    res.writeHead(404, { "Content-Type": "text/plain" }); // Set response headers
    res.end("Not Found"); // Send a 404 Not Found response
  }
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`HTTP server is listening on port ${port}`);
});
