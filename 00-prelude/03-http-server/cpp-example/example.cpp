#include <iostream>
#include <boost/asio.hpp>

using boost::asio::ip::tcp;

void handle_request(tcp::socket& socket) {
    try {
        char buffer[1024];
        boost::system::error_code error;

        // Read the request
        size_t length = socket.read_some(boost::asio::buffer(buffer), error);
        if (error == boost::asio::error::eof) {
            std::cout << "Client disconnected\n";
            return;
        } else if (error) {
            throw boost::system::system_error(error);
        }

        std::string request(buffer, length);
        std::cout << "Received request: " << request << "\n";

        // Formulate the response
        std::string response = "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\nHello, World!";
        
        // Send the response
        boost::asio::write(socket, boost::asio::buffer(response), error);
        if (error) {
            throw boost::system::system_error(error);
        }
        std::cout << "Response sent\n";

    } catch (std::exception& e) {
        std::cerr << "Exception in handle_request: " << e.what() << "\n";
    }
}

int main() {
    try {
        boost::asio::io_context io_context;

        // Create a TCP acceptor to listen on port 8080
        tcp::acceptor acceptor(io_context, tcp::endpoint(tcp::v4(), 8080));

        std::cout << "HTTP server is listening on port 8080...\n";

        while (true) {
            // Create a socket
            tcp::socket socket(io_context);

            // Wait for a client to connect
            acceptor.accept(socket);

            // Handle the client request
            handle_request(socket);

            // Close the connection
            socket.close();
        }
    } catch (std::exception& e) {
        std::cerr << "Exception: " << e.what() << "\n";
    }

    return 0;
}