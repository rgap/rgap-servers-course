import socket

# Create a socket server
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(("0.0.0.0", 8080))
server_socket.listen(1)

print("Server is listening on port 8080")

while True:
    client_socket, client_address = server_socket.accept()
    print(f"Connection from {client_address}")

    # Read message from client
    data = client_socket.recv(1024)
    print(f"Received: {data.decode()}")

    # Echo message back to client
    client_socket.sendall(data)
    print("Echoed message back to client")

    # Close the connection socket
    client_socket.close()
