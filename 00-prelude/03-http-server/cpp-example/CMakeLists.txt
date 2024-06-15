cmake_minimum_required(VERSION 3.0)
project(HTTPServerExamples)

# Find Boost library
find_package(Boost REQUIRED COMPONENTS system)

# Add the executable for the simple HTTP server using Boost.Asio
add_executable(example example.cpp)
target_link_libraries(example Boost::system)
