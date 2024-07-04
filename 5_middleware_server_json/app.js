import express from "express";

const app = express();
const port = 3000;

// Middleware to manually parse JSON bodies
app.use((req, res, next) => {
  let data = "";

  // Registering a listener for the 'data' event on the req object.
  // This event is emitted whenever a chunk of data is available to be read.
  req.on("data", chunk => {
    console.log("chunk:", chunk.toString());
    data += chunk;
  });

  // Registering a listener for the 'end' event on the req object.
  // This event is emitted when all the data has been received.
  req.on("end", () => {
    try {
      // Attempt to parse the accumulated data as JSON
      req.body = JSON.parse(data);
      console.log("body:", req.body);
    } catch (error) {
      req.body = undefined;
    }
    next();
  });
});

// Route to handle POST requests to the root URL
app.post("/", (req, res) => {
  console.log(req.body); // Logging the parsed JSON data
  res.send("Received data!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
