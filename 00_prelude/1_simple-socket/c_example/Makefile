# Define variables
BUILD_DIR = build
EXECUTABLE = example

# Default target
all: build run

# Run CMake and Make
build:
	mkdir -p $(BUILD_DIR)
	cd $(BUILD_DIR) && cmake .. && make

# Run the executable
run:
	./$(BUILD_DIR)/$(EXECUTABLE)

# Clean the build directory
clean:
	rm -rf $(BUILD_DIR)

.PHONY: all build run clean
