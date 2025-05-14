const http = require("http");
const path = require("path");
const fs = require("fs");

const publicDirectory = path.join(__dirname, "public");

// Function to serve static files
function serveStaticFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      return;
    }

    let contentType = "text/plain";
    if (filePath.endsWith(".html")) {
      contentType = "text/html";
    } else if (filePath.endsWith(".css")) {
      contentType = "text/css";
    } else if (filePath.endsWith(".js")) {
      contentType = "application/javascript";
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      serveStaticFile(res, path.join(publicDirectory, "index.html"));
    } else {
      const filePath = path.join(publicDirectory, req.url);
      serveStaticFile(res, filePath);
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
