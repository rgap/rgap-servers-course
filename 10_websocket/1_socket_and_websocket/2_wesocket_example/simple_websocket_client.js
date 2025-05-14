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

// Import the 'ws' module to create a WebSocket client
const WebSocket = require("ws");

// Create a WebSocket client and connect to the server
const ws = new WebSocket("ws://localhost:8080");

// 'open' event is triggered when the connection is successfully established
ws.on("open", () => {
  console.log("[WebSocket Client] Connected to server");
  // Send a message to the server
  const message = "Hello, WebSocket server!";
  console.log(`[WebSocket Client] Sending to server: ${message}`);
  ws.send(message);
});

// 'message' event is triggered when the client receives a message from the server
ws.on("message", message => {
  console.log(`[WebSocket Client] Received from server: ${message}`);
});

// 'close' event is triggered when the server disconnects the client
ws.on("close", () => {
  console.log("[WebSocket Client] Disconnected from server");
});
