#include <iostream>
#include <boost/asio.hpp>

using boost::asio::ip::tcp;

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

            // Retrieve and print client information
            tcp::endpoint remote_endpoint = socket.remote_endpoint();
            std::string client_ip = remote_endpoint.address().to_string();
            unsigned short client_port = remote_endpoint.port();
            std::cout << "Connection from " << client_ip << ":" << client_port << "\n";

            // Send "Hello, World!" message to the connected client
            std::string message = "Hello, World!\n";
            boost::system::error_code ignored_error;
            boost::asio::write(socket, boost::asio::buffer(message), ignored_error);

            std::cout << "Hello message sent\n";
        }
    } catch (std::exception& e) {
        std::cerr << "Exception: " << e.what() << "\n";
    }

    return 0;
}
