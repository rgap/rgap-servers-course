const http = require("http");
const fs = require("fs"); // Import the fs module to interact with the file system
const path = require("path"); // Import the path module to handle file paths

// Define the port to listen on
const port = 8080;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Serve the index.html file when the root URL is requested
  if (req.url === "/") {
    const filePath = path.join(__dirname, "public", "index.html"); // Define the path to the HTML file

    // Read and serve the HTML file
    fs.readFile(filePath, (err, content) => {
      if (err) {
        // Handle file read errors
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server Error");
      } else {
        // Serve the HTML content
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  } else {
    // Respond with 404 Not Found for other URLs
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Historical context:
// Serving static files is a fundamental task for web servers, allowing them to serve HTML, CSS, JavaScript, and other assets.
// Early web servers like Apache were optimized for serving static content.
