const net = require("net");

// Create a socket server
const server = net.createServer(socket => {
  console.log("Client connected");

  // Handle incoming data
  socket.on("data", data => {
    console.log(`Received: ${data}`);
    // Echo the received data back to the client
    socket.write(data, () => {
      console.log("Echoed message back to client");
      // Close the connection after echoing the message
      socket.end();
    });
  });

  // Handle connection end
  socket.on("end", () => {
    console.log("Client disconnected");
  });

  // Handle connection error
  socket.on("error", err => {
    console.log(`Client error: ${err.message}`);
  });
});

// Listen on port 8080
server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
