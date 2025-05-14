const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:8081");

ws.on("open", () => {
  console.log("Connected to server");
  ws.send("Hello, server!");
});

ws.on("message", message => {
  console.log(`Received: ${message}`);
});

ws.on("close", () => {
  console.log("Disconnected from server");
});
