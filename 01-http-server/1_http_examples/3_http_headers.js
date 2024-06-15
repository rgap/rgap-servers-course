const http = require("http"); // Import the http module
const port = 8080; // Define the port to listen on

// Create an HTTP server
const server = http.createServer((req, res) => {
  console.log("Received request headers:", req.headers); // Log the received request headers

  // Set response headers and send the response
  res.writeHead(200, {
    "Content-Type": "text/plain", // Set the Content-Type header
    "Custom-Header": "CustomHeaderValue", // Set a custom header
  });
  res.end("Hello, World!"); // Send the response body
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`HTTP server is listening on port ${port}`);
});
