import express from "express";

// Importing the authentication middleware
import auth from "./middlewares/auth.js";

const app = express();
const port = 3000;

// Using the authentication middleware for a protected route
app.use("/protected", auth, (req, res) => {
  res.send("This is a protected route.");
});

// Setting up a route for the root URL ("/")
// When a GET request is made to the root URL, the server responds with "Hello World!"
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Starting the server to listen on the specified port
// The callback function logs a message to the console once the server starts
app.listen(port, () => {
  console.log(`Basic authentication server listening at http://localhost:${port}`);
});

// Send an Authorization header with a Bearer token
// Authorization: Bearer mysecrettoken
// It should display "This is a protected route" in the response body
