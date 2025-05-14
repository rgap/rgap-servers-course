const socket = io("http://localhost:8084");

socket.on("connect", () => {
  console.log("Connected to collaborative editing server");
});

socket.on("init", initialContent => {
  console.log("Received initial content");
  document.getElementById("document").value = initialContent;
});

socket.on("update", newContent => {
  console.log(`Received update: ${newContent}`);
  document.getElementById("document").value = newContent;
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

// Function to send changes to the server
function sendChange() {
  const newText = document.getElementById("document").value;
  socket.emit("edit", newText);
}

// Event listener for the edit button
document.getElementById("edit-button").addEventListener("click", sendChange);
