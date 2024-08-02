// Sequence Diagram
// Client                          Server
//   |                               |
//   | -------- Hello, Server! ----->|
//   |                               |
//   | <---- Echo: Hello, Server! ---|
//   |                               |
//   |       (Client disconnects)    |
//   |-------------------------------X
//   |                               |
//   |       (Server disconnects)    |
//   |-------------------------------X
//   |

// Import the 'ws' module to create a WebSocket server
const WebSocket = require("ws");

// Create a WebSocket server that listens on port 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", ws => {
  console.log("[WebSocket Server] New client connected");

  // 'message' event is triggered when the server receives a message from the client
  ws.on("message", message => {
    console.log(`[WebSocket Server] Received from client: ${message}`);
    // Send an echo message back to the client
    const response = `Echo: ${message}`;
    console.log(`[WebSocket Server] Sending to client: ${response}`);
    ws.send(response);
  });

  // 'close' event is triggered when the client disconnects
  ws.on("close", () => {
    console.log("[WebSocket Server] Client disconnected");
  });
});

console.log("[WebSocket Server] Server started on ws://localhost:8080");
