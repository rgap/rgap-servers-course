const http = require("http");
const port = 8080;

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

server.listen(port, () => {
  console.log(`HTTP server is listening on port ${port}`);
});
