import socket


def handle_request(client_socket):
    try:
        # Read the request
        request = client_socket.recv(1024).decode()
        print(f"Received request: {request}")

        # Formulate the response
        response = "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\nHello, World!"

        # Send the response
        client_socket.sendall(response.encode())
        print("Response sent")
    except Exception as e:
        print(f"Exception in handle_request: {e}")
    finally:
        # Close the connection socket
        client_socket.close()


# Create a socket server
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(("0.0.0.0", 8080))
server_socket.listen(1)

print("HTTP server is listening on port 8080")

while True:
    client_socket, client_address = server_socket.accept()
    print(f"Connection from {client_address}")

    # Handle the client request
    handle_request(client_socket)
