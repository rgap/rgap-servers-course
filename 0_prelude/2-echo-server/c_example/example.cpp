#include <iostream>
#include <boost/asio.hpp>

using boost::asio::ip::tcp;

void handle_client(tcp::socket& socket) {
    try {
        char data[1024];  // Buffer for storing received data
        boost::system::error_code error;

        // Read message from client
        size_t length = socket.read_some(boost::asio::buffer(data), error);
        if (error == boost::asio::error::eof) {
            std::cout << "Client disconnected\n";
            return;
        } else if (error) {
            throw boost::system::system_error(error);
        }

        std::cout << "Received: " << std::string(data, length) << "\n";

        // Echo message back to client
        boost::asio::write(socket, boost::asio::buffer(data, length), error);
        if (error) {
            throw boost::system::system_error(error);
        }

        std::cout << "Echoed message back to client\n";
    } catch (std::exception& e) {
        std::cerr << "Exception in handle_client: " << e.what() << "\n";
    }
}

int main() {
    try {
        boost::asio::io_context io_context;

        // Create a TCP acceptor to listen on port 8080
        tcp::acceptor acceptor(io_context, tcp::endpoint(tcp::v4(), 8080));

        std::cout << "Server is listening on port 8080...\n";

        while (true) {
            // Create a socket
            tcp::socket socket(io_context);

            // Wait for a client to connect
            acceptor.accept(socket);

            // Print client information
            tcp::endpoint remote_endpoint = socket.remote_endpoint();
            std::string client_ip = remote_endpoint.address().to_string();
            unsigned short client_port = remote_endpoint.port();
            std::cout << "Connection from " << client_ip << ":" << client_port << "\n";

            // Handle the client connection
            handle_client(socket);

            // Close the connection
            socket.close();
        }
    } catch (std::exception& e) {
        std::cerr << "Exception: " << e.what() << "\n";
    }

    return 0;
}
