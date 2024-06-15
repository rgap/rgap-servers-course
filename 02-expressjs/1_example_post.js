const express = require("express"); // Import the express module
const bodyParser = require("body-parser"); // Import the body-parser module

const app = express(); // Create an instance of Express
const port = 8080; // Define the port to listen on

// Use body-parser middleware to parse JSON bodies
app.use(bodyParser.text());

// Define a route to handle POST requests to the root URL
app.post("/", (req, res) => {
  const body = req.body; // Get the parsed body from the request
  console.log("Received POST data:", body); // Log the received POST data
  res.send("Hello, POST!"); // Send the response
});

// Handle other requests
app.use((req, res) => {
  res.status(404).send("Not Found"); // Send a 404 Not Found response
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});
