const net = require("net");

// Create a socket server
const server = net.createServer(socket => {
  // Retrieve and print client information
  const clientAddress = socket.remoteAddress;
  const clientPort = socket.remotePort;
  console.log(`Connection from ${clientAddress}:${clientPort}`);

  // Send "Hello, World!" response
  socket.write("Hello, World!");
  socket.end();

  console.log("Hello message sent");
});

// Listen on port 8080
server.listen(8080, () => {
  console.log("Socket server running on port 8080");
});
