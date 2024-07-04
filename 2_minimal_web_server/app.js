// Importing the express module to create an Express application
import express from "express";

// Creating an instance of an Express application
const app = express();

// Defining the port number where the server will listen for requests
const port = 3000;

// Setting up a route for the root URL ("/")
// When a GET request is made to the root URL, the server responds with "Hello World!"
app.get("/", (req, res) => {
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

  // res (before res.send()):
  // res = {
  //   "statusCode": 200, // Default status code
  //   "headers": { /* default headers */ },
  //   "locals": {} // Local variables scoped to the request, useful for data passing
  // }
  res.send("Hello World!");

  // res (after res.send()):
  // res = {
  //   "statusCode": 200, // Status code set to 200
  //   "headers": {
  //     "content-type": "text/html; charset=utf-8",
  //     "content-length": "11", // Length of "Hello World!"
  //     "connection": "keep-alive"
  //   },
  //   "body": "Hello World!"
  // }
});

// Starting the server to listen on the specified port
// The callback function logs a message to the console once the server starts
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
