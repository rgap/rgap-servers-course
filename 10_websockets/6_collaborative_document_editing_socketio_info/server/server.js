import express from "express";
import path from "path";
import { Server } from "socket.io";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8084;

let documentContent = "Start editing...";

app.use(express.static(path.join(__dirname, "../client")));

const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Attach Socket.IO to the HTTP server instance
const socketServer = new Server(server);

socketServer.on("connection", socket => {
  console.log("\nUser connected for collaborative editing\n");

  // Socket id
  console.log("Socket id: ", socket.id);
  // Socket handshake
  // console.log("Socket handshake: ", socket.handshake);
  // Socket request
  // console.log("Socket request: ", socket.request);
  // Socket request headers
  console.log("Socket request headers: ", socket.request.headers);
  // Socket request url
  console.log("Socket request url: ", socket.request.url);
  // Socket request method
  console.log("Socket request method: ", socket.request.method);
  // Socket request query
  console.log("Socket request query: ", socket.request.query);
  // Socket request body
  console.log("Socket request body: ", socket.request.body);
  // Socket request params
  console.log("Socket request params: ", socket.request.params);
  // Socket request cookies
  console.log("Socket request cookies: ", socket.request.cookies);
  // Socket request signedCookies
  console.log("Socket request signedCookies: ", socket.request.signedCookies);
  // Socket request session
  console.log("Socket request session: ", socket.request.session);
  // Socket request sessionID
  console.log("Socket request sessionID: ", socket.request.sessionID);
  // Socket request sessionStore
  console.log("Socket request sessionStore: ", socket.request.sessionStore);
  // Numer of connected clients
  console.log("Number of connected clients: ", socketServer.engine.clientsCount);

  console.log("\n\n");

  // Send message to all connected clients
  socketServer.emit("message", "User connected for collaborative editing");

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
