import express from "express";
import path from "path";
import { Server } from "socket.io";
import { fileURLToPath } from "url";

// For ES Modules, we need to get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8084;

let documentContent = "Start editing...";

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, "../client")));

// Start the Express server and get the HTTP server instance
const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Attach Socket.IO to the HTTP server instance
const io = new Server(server);

io.on("connection", socket => {
  console.log("User connected for collaborative editing");

  // Send the initial document content to the newly connected client
  socket.emit("init", documentContent);

  // Listen for document changes from the client
  socket.on("edit", newContent => {
    documentContent = newContent;
    console.log(`Received update: ${newContent}`);
    // Broadcast the update to all other connected clients
    socket.broadcast.emit("update", documentContent);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
