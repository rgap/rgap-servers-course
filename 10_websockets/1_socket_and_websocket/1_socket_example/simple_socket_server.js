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

// Import the 'net' module to create a TCP server
const net = require("net");

// Create a server that listens on port 8081
const server = net.createServer(socket => {
  console.log("[Server] New TCP client connected");

  // 'data' event is triggered when the server receives data from the client
  socket.on("data", data => {
    console.log(`[Server] Received from client: ${data.toString()}`);
    // Echo the received data back to the client
    const response = `Echo: ${data}`;
    console.log(`[Server] Sending to client: ${response}`);
    socket.write(response);
  });

  // 'end' event is triggered when the client disconnects
  socket.on("end", () => {
    console.log("[Server] TCP client disconnected");
  });
});

server.listen(8081, () => {
  console.log("[Server] TCP server listening on port 8081");
});
