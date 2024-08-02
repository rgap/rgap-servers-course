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

// Import the 'net' module to create a TCP client
const net = require("net");

// Create a connection to the server on port 8081
const client = net.createConnection({ port: 8081 }, () => {
  console.log("[Client] Connected to TCP server");
  // Send a message to the server
  const message = "Hello, server!";
  console.log(`[Client] Sending to server: ${message}`);
  client.write(message);
});

// 'data' event is triggered when the client receives data from the server
client.on("data", data => {
  console.log(`[Client] Received from server: ${data.toString()}`);
});

// 'end' event is triggered when the server disconnects the client
client.on("end", () => {
  console.log("[Client] Disconnected from TCP server");
});
