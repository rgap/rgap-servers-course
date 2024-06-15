const net = require("net");

// Function to handle client requests
function handleRequest(socket) {
  socket.on("data", data => {
    // Convert data to string
    const request = data.toString();
    console.log(`Received request: ${request}`);

    // Validate the HTTP method
    const validMethods = ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"];
    const requestLines = request.split("\r\n");
    let response;
    try {
      if (requestLines.length > 0) {
        const [method, path, version] = requestLines[0].split(" ");
        if (!validMethods.includes(method)) {
          throw new Error(`Invalid HTTP method: ${method}`);
        }
      }

      // Formulate the response
      response = "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\nHello, World!";
    } catch (error) {
      console.error(`Error: ${error.message}`);
      response = "HTTP/1.1 400 Bad Request\r\nContent-Type: text/plain\r\n\r\nBad Request";
    }

    // Send the response
    socket.write(response);
    console.log("Response sent");

    // Close the connection after sending the response
    socket.end();
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });

  socket.on("error", err => {
    console.log(`Client error: ${err.message}`);
  });
}

// Create a socket server
const server = net.createServer(handleRequest);

// Listen on port 8080
server.listen(8080, () => {
  console.log("HTTP server is listening on port 8080");
});
