import socket

# Create a socket server
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('0.0.0.0', 8080))
server_socket.listen(1)

print('Socket server running on port 8080')

while True:
    client_socket, client_address = server_socket.accept()
    print(f'Connection from {client_address}')
    client_socket.sendall(b'Hello, World!')
    client_socket.close()
