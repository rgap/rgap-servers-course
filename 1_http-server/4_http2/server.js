const http2 = require("http2"); // Import the HTTP/2 module to create an HTTP/2 server
const fs = require("fs"); // Import the filesystem module to read files from the file system
const port = 8443; // Define the port to listen on for HTTPS connections

// SSL/TLS provides encryption for data in transit, ensuring that data exchanged between the client and server is secure.
// HTTP/2 is the second major version of the HTTP network protocol, which provides several performance improvements over HTTP/1.1.

// Read SSL certificate and key
const options = {
  key: fs.readFileSync("key.pem"), // Read the private key file (key.pem)
  // The private key is used for decrypting data encrypted with the corresponding public key. It must be kept secure.
  cert: fs.readFileSync("cert.pem"), // Read the certificate file (cert.pem)
  // The certificate is issued by a Certificate Authority (CA) and contains the public key. It helps in establishing a secure connection.
};

// Create an HTTP/2 server
const server = http2.createSecureServer(options, (req, res) => {
  // The createSecureServer function takes the SSL options and a callback function.
  // The callback function handles incoming requests and sends responses.

  res.writeHead(200, { "Content-Type": "text/plain" }); // Set response headers
  // The Content-Type header specifies the type of content being sent to the client. In this case, it's plain text.

  res.end("Hello, HTTP/2!"); // Send the response body
  // The end function sends the response body and signals that the response is complete.
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`HTTP/2 server is listening on port ${port}`);
  // The listen function starts the server and makes it listen for incoming connections on the specified port.
  // The callback function logs a message indicating that the server is running.
});

/*
Theory and Concepts:

1. HTTP/2:
   - HTTP/2 is the second major version of the HTTP protocol, designed to improve performance and reduce latency.
   - Key features of HTTP/2 include:
     - Multiplexing: Allows multiple requests and responses to be sent simultaneously over a single connection.
     - Header Compression: Reduces the overhead of HTTP headers by compressing them.
     - Server Push: Allows the server to send resources to the client proactively, without the client explicitly requesting them.
     - Stream Prioritization: Enables prioritization of streams (requests/responses) based on their importance.

2. SSL/TLS:
   - Secure Sockets Layer (SSL) and Transport Layer Security (TLS) are protocols that provide secure communication over a network.
   - SSL is the predecessor to TLS. TLS is more secure and widely used today.
   - SSL/TLS encrypts the data exchanged between the client and server, ensuring data integrity and privacy.

3. HTTPS:
   - HTTPS (HTTP Secure) is the secure version of HTTP. It uses SSL/TLS to encrypt communication between the client and server.
   - HTTPS ensures that data transmitted over the network is secure from eavesdropping and tampering.

4. Certificate and Key:
   - A certificate is a digital document issued by a Certificate Authority (CA) that verifies the identity of a website.
   - The certificate contains the public key used for encryption.
   - The private key is kept secret and is used to decrypt data encrypted with the public key.

5. Ports:
   - Port 8443 is commonly used for HTTPS traffic in development environments. Port 443 is the default port for HTTPS in production.

6. Benefits of HTTP/2:
   - Performance: Reduces latency and improves page load times with features like multiplexing and header compression.
   - Efficiency: More efficient use of network resources, reducing the need for multiple connections.
   - Improved User Experience: Faster load times and smoother interactions for users.
*/
