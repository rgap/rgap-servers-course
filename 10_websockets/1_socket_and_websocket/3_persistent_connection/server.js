// Persistent Connection: The WebSocket server maintains a persistent
// connection with the clients. It can continuously push data
// (e.g., stock prices) to all connected clients without the need
// for the clients to request updates. This is ideal for real-time
// applications that require constant updates.

const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8081 });

let clients = [];

wss.on("connection", ws => {
  clients.push(ws);
  console.log("Client connected");

  ws.on("close", () => {
    clients = clients.filter(client => client !== ws);
    console.log("Client disconnected");
  });
});

// Function to simulate stock price updates
function broadcastStockPrice() {
  const stockPrice = Math.random() * 1000; // Simulated stock price
  clients.forEach(client => client.send(`Stock price: ${stockPrice.toFixed(2)}`));
}

// Broadcast stock price every second
setInterval(broadcastStockPrice, 1000);
