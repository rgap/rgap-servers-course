cmake_minimum_required(VERSION 3.0)
project(SimpleBoostAsioEchoServer)

find_package(Boost REQUIRED COMPONENTS system)

add_executable(example example.cpp)
target_link_libraries(example Boost::system)
