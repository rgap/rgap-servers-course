import express from "express";

const app = express();
const port = 3000;

// Route to handle POST requests to the root URL
app.post("/", (req, res) => {
  console.log(req.body); // This will return undefined even if no body is sent
  res.send("Received data!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
