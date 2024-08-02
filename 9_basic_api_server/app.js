import express from "express";
import apiRoutes from "./routes/api.js";

// Creating an instance of an Express application
const app = express();

// Defining the port number where the server will listen for requests
const port = 3000;

// Middleware to parse JSON bodies from HTTP requests
app.use(express.json());

// Using the API routes for any requests to /api
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Basic API server listening at http://localhost:${port}`);
});
