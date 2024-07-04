cmake_minimum_required(VERSION 3.0)
project(HTTPServerBoost)

find_package(Boost REQUIRED COMPONENTS system)

add_executable(example example.cpp)
target_link_libraries(example Boost::system)
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED True)
