const http = require("http"); // Import the http module
const port = 8080; // Define the port to listen on

// Create an HTTP server
const server = http.createServer((req, res) => {
  const cookies = req.headers.cookie; // Get the cookies from the request headers
  console.log("Received cookies:", cookies); // Log the received cookies

  // Set a cookie and send the response
  res.writeHead(200, {
    "Content-Type": "text/plain", // Set the Content-Type header
    "Set-Cookie": "mycookie=myvalue", // Set a cookie
  });
  res.end("Hello, World!"); // Send the response body
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`HTTP server is listening on port ${port}`);
});
