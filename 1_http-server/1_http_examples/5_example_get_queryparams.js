const http = require("http"); // Import the http module
const url = require("url"); // Import the url module to handle URL parsing
const port = 8080; // Define the port to listen on

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url.startsWith("/")) {
    // Parse the request URL to get query parameters
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    // Handle GET requests to the root URL with query parameters
    res.writeHead(200, { "Content-Type": "text/plain" }); // Set response headers
    res.end(`Hello, GET! Query parameters: ${JSON.stringify(query)}`); // Send the response with query parameters
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
