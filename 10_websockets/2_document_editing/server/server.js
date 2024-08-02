const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8084 });

let currentClient = null;

wss.on("connection", ws => {
  if (currentClient) {
    ws.close(); // Close the new connection if a client is already connected
    console.log("Another connection attempt detected. Only one client allowed.");
  } else {
    currentClient = ws;
    console.log("User connected");

    ws.on("message", message => {
      console.log(`Received: ${message}`);
      // Echo the message back to the client
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(`Echo: ${message}`);
      }
    });

    ws.on("close", () => {
      currentClient = null;
      console.log("User disconnected");
    });
  }
});

console.log("WebSocket server running on ws://localhost:8084");
