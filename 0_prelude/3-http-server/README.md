# HTTP Server

## Introduction

This example demonstrates a simple HTTP server. The server will accept a connection, parse the HTTP request, and send a simple HTTP response.

## Files

- `example.cpp`: C++ implementation of the HTTP server.
- `example_boost.cpp`: C++ implementation of the HTTP server using Boost.Asio.
- `example.js`: Node.js implementation of the HTTP server.
- `example.py`: Python implementation of the HTTP server.

## Testing

To test these examples, you can use a web browser or a tool like `curl` to connect to the server and see the response.

### Testing with a Web Browser

1. Run the server code.
2. Open a web browser and navigate to `http://localhost:8080`.
3. You should see a simple HTTP response.

### Testing with `curl`

1. Run the server code.
2. Open a terminal and use `curl` to connect to the server:
   ```sh
   curl http://localhost:8080
   ```
