const ws = new WebSocket("ws://localhost:8084");

ws.onopen = () => {
  console.log("Connected to collaborative editing server");
};

ws.onmessage = async event => {
  let message;
  if (typeof event.data === "string") {
    // Message is already a string
    message = event.data;
  } else {
    // Message is a Blob or ArrayBuffer, convert to text
    message = await event.data.text();
  }

  console.log(`Received: ${message}`);
  document.getElementById("document").value = message;
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
