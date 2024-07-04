import express from "express";

const app = express();
const port = 3000;

// Middleware function to log request details
const requestLogger = (req, res, next) => {
  console.log(`Middleware: ${req.method} ${req.url}`);

  // Example:
  // If the request is a GET request to the root URL:
  // req = {
  //   "method": "GET",
  //   "url": "/",
  //   "headers": { /* request headers */ },
  //   "body": undefined,
  //   "params": {}, // Route parameters
  //   "query": {}, // Query string parameters
  //   "cookies": {}, // Cookies sent by the client (if any)
  //   "ip": "127.0.0.1", // IP address of the client
  //   "path": "/", // Path part of the URL
  //   "protocol": "http", // Protocol used (http or https)
  //   "hostname": "localhost", // Hostname derived from the Host header
  //   "originalUrl": "/", // Original URL of the request
  //   "subdomains": [] // Subdomains in the Host header (if any)
  // }

  // res at this point:
  // res = {
  //   "statusCode": 200, // Default status code
  //   "headers": {}, // Headers to be sent with the response
  //   "locals": {} // Local variables scoped to the request, useful for data passing
  //   "send": [Function], // Method to send a response
  //   "json": [Function], // Method to send a JSON response
  //   "status": [Function], // Method to set the HTTP status for the response
  // }

  next(); // Calling next() to pass control to the next middleware function
};

// Using the requestLogger middleware for all routes
app.use(requestLogger);

// Setting up a route for the root URL ("/")
// When a GET request is made to the root URL, the server responds with "Hello World!"
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Simple middleware server listening at http://localhost:${port}`);
});
