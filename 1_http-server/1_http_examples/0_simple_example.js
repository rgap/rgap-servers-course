const http = require("http"); // Import the http module

// Define the port to listen on
const port = 8080;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // By default, the HTTP method will be GET when the server receives a request
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "text/plain" });
  // Send the response body "Hello, World!"
  res.end("Hello, World!\n");
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
