#include <iostream>
#include <boost/asio.hpp>
#include <vector>
#include <string>
#include <sstream>
#include <algorithm>

using boost::asio::ip::tcp;

// Function to split a string by a delimiter
std::vector<std::string> split(const std::string &s, char delimiter) {
    std::vector<std::string> tokens;
    std::string token;
    std::istringstream tokenStream(s);
    while (std::getline(tokenStream, token, delimiter)) {
        tokens.push_back(token);
    }
    return tokens;
}

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

        // Validate the HTTP method
        std::vector<std::string> request_lines = split(request, '\n');
        std::vector<std::string> valid_methods;
        valid_methods.push_back("GET");
        valid_methods.push_back("POST");
        valid_methods.push_back("PUT");
        valid_methods.push_back("DELETE");
        valid_methods.push_back("PATCH");
        valid_methods.push_back("OPTIONS");
        valid_methods.push_back("HEAD");

        std::string response;

        if (!request_lines.empty()) {
            std::vector<std::string> request_line_tokens = split(request_lines[0], ' ');
            if (request_line_tokens.size() >= 3) {
                std::string method = request_line_tokens[0];
                if (std::find(valid_methods.begin(), valid_methods.end(), method) != valid_methods.end()) {
                    // Formulate the response
                    response = "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\nHello, World!";
                } else {
                    // Invalid HTTP method
                    response = "HTTP/1.1 400 Bad Request\r\nContent-Type: text/plain\r\n\r\nBad Request";
                }
            } else {
                // Invalid request format
                response = "HTTP/1.1 400 Bad Request\r\nContent-Type: text/plain\r\n\r\nBad Request";
            }
        } else {
            // Empty request
            response = "HTTP/1.1 400 Bad Request\r\nContent-Type: text/plain\r\n\r\nBad Request";
        }

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
