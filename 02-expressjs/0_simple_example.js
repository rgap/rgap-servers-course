const express = require("express"); // Import the express module

// Create an instance of Express
const app = express();

// Define the port to listen on
const port = 8080;

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Send the response body "Hello, World!"
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});
