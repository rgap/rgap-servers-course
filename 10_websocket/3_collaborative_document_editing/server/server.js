const WebSocket = require("ws");
const socketServer = new WebSocket.Server({ port: 8084 });

let clients = new Set();
let documentContent = "Start editing...";

socketServer.on("connection", ws => {
  clients.add(ws);
  console.log("User connected for collaborative editing");

  // Send the initial document content to the newly connected client
  ws.send(documentContent);

  ws.on("message", message => {
    console.log(`Received update: ${message}`);
    documentContent = message; // Update the document content

    // Broadcast the update to all other connected clients
    clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(documentContent);
      }
    });
  });

  ws.on("close", () => {
    clients.delete(ws);
    console.log("User disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:8084");
