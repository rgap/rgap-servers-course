import express from "express";

// Creating an instance of an Express application
const app = express();

// Defining the port number where the server will listen for requests
const port = 3000;

// Serving static files from the "public" directory
// The express.static middleware serves static files such as HTML, CSS, and JavaScript
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Static file server listening at http://localhost:${port}`);
});
