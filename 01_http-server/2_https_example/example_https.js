const fs = require("fs"); // Import the filesystem module to read files from the file system
const https = require("https"); // Import the HTTPS module to create an HTTPS server
const port = 8443; // Define the port to listen on for HTTPS connections

// SSL/TLS provides encryption for data in transit, ensuring that data exchanged between the client and server is secure.
// HTTPS (HTTP Secure) is the secure version of HTTP, using SSL/TLS to encrypt the communication.

// Read SSL certificate and key
const options = {
  key: fs.readFileSync("key.pem"), // Read the private key file (key.pem)
  // The private key is used for decrypting data encrypted with the corresponding public key. It must be kept secure.
  cert: fs.readFileSync("cert.pem"), // Read the certificate file (cert.pem)
  // The certificate is issued by a Certificate Authority (CA) and contains the public key. It helps in establishing a secure connection.
};

// Create an HTTPS server
const server = https.createServer(options, (req, res) => {
  // The createServer function takes the SSL options and a callback function.
  // The callback function handles incoming requests and sends responses.

  res.writeHead(200, { "Content-Type": "text/plain" }); // Set response headers
  // The Content-Type header specifies the type of content being sent to the client. In this case, it's plain text.

  res.end("Hello, HTTPS!"); // Send the response body
  // The end function sends the response body and signals that the response is complete.
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`HTTPS server is listening on port ${port}`);
  // The listen function starts the server and makes it listen for incoming connections on the specified port.
  // The callback function logs a message indicating that the server is running.
});

/*
Theory and Concepts:

1. SSL/TLS:
   - Secure Sockets Layer (SSL) and Transport Layer Security (TLS) are protocols that provide secure communication over a network.
   - SSL is the predecessor to TLS. TLS is more secure and widely used today.
   - SSL/TTLS encrypts the data exchanged between the client and server, ensuring data integrity and privacy.

2. HTTPS:
   - HTTPS is the secure version of HTTP. It uses SSL/TLS to encrypt communication between the client and server.
   - HTTPS ensures that data transmitted over the network is secure from eavesdropping and tampering.

3. Certificate and Key:
   - A certificate is a digital document issued by a Certificate Authority (CA) that verifies the identity of a website.
   - The certificate contains the public key used for encryption.
   - The private key is kept secret and is used to decrypt data encrypted with the public key.

4. Ports:
   - Port 8443 is commonly used for HTTPS traffic in development environments. Port 443 is the default port for HTTPS in production.

5. Benefits of HTTPS:
   - Security: Encrypts data in transit, protecting it from interception and tampering.
   - Trust: Validates the identity of the website, ensuring that users are communicating with the intended server.
   - SEO: Search engines favor HTTPS websites, potentially improving search engine rankings.
   - Compliance: Required for compliance with certain security standards and regulations.
*/
