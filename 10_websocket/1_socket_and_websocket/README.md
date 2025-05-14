## Historical Context

### Sockets:

- **1980s:** The term "socket" originated with the Unix operating system. Fundamental in network communication.

### WebSockets:

- **2011:** The WebSocket PROTOCOL was standardized by the Internet Engineering Task Force (IETF) in December 2011 (RFC 6455).

- **Late 2000s:** The development of WebSockets was driven by the need for more efficient real-time communication in web applications, replacing less efficient techniques like POLLING and LONG-POLLING.

## Theoretical Context

### Sockets:

- Sockets are endpoints for sending and receiving data between two machines over a network.
- They can operate using TCP and UDP.
- **TCP Sockets:** Provide reliable, ordered, and error-checked delivery of data. They are connection-oriented, requiring a connection to be established before data can be sent.
- **UDP Sockets:** Provide faster, but less reliable communication. They are connectionless and do not guarantee order or delivery of packets.

### WebSockets:

- WebSockets enable **FULL-DUPLEX** (to send and receive from both sides) communication channels over a single TCP connection, making them ideal for real-time web applications.

- **Handshake:** The connection begins with an HTTP request, during which the client and server upgrade the connection to a WebSocket using the Upgrade header.

- **Framing:** Communication is framed, with each message including a header and payload, supporting efficient binary and text message transmission.
