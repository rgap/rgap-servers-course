const http = require("http");
const port = 8080;

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/") {
    // Handle POST requests to the root URL
    let body = ""; // Initialize a variable to store the request body

    // Listen for data events to receive chunks of the request body
    req.on("data", chunk => {
      body += chunk.toString(); // Append each chunk to the body variable
    });

    // Listen for the end event to process the complete request body
    req.on("end", () => {
      console.log("Received POST data:", body); // Log the received POST data
      res.writeHead(200, { "Content-Type": "text/plain" }); // Set response headers
      res.end("Hello, POST!"); // Send the response
    });
  } else {
    // Handle other requests
    res.writeHead(404, { "Content-Type": "text/plain" }); // Set response headers
    res.end("Not Found"); // Send a 404 Not Found response
  }
});

server.listen(port, () => {
  console.log(`HTTP server is listening on port ${port}`);
});
