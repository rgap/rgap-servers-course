import express from "express";

const app = express();
const port = 3000;

// Middleware to parse JSON bodies from HTTP requests
app.use(express.json());

// Route to handle POST requests to the root URL
app.post("/", (req, res) => {
  console.log(req.body); // Logging the parsed JSON data
  res.send("Received data!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
