# Simple Socket

## Introduction

This example demonstrates the basic creation and usage of a socket. The server will listen on a specified port and accept a single connection, sending a "Hello, World!" message to the connected client.

## Files

- `example.cpp`: C++ implementation of the simple socket.
- `example.js`: Node.js implementation of the simple socket.
- `example.py`: Python implementation of the simple socket.

## Testing

To test these examples, you can use a tool like `telnet` or `netcat` to connect to the server and see the response.

### Testing with `netcat`

1. Run the server code.
2. Open a terminal and use `nc localhost 8080` to connect to the server
