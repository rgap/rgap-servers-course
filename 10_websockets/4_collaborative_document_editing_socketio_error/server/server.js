import express from "express";
import { Server } from "socket.io";

const app = express();
const port = 8084;

let documentContent = "Start editing...";

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
