const ws = new WebSocket("ws://localhost:8084");

ws.onopen = () => {
  console.log("Connected to collaborative editing server");
};

ws.onmessage = event => {
  console.log(`Received: ${event.data}`);
  // Update the document in the user interface
  document.getElementById("document").value = event.data;
};

ws.onclose = () => {
  console.log("Disconnected from server");
};

// Function to send changes to the server
function sendChange(update) {
  ws.send(update);
}

// Event listener for the edit button
document.getElementById("edit-button").addEventListener("click", () => {
  const newText = document.getElementById("document").value;
  sendChange(newText);
});
