const http = require("http");
const fs = require("fs");

const server = http.createServer(function(request, response) {
  
  fs.readFile("./client/adder.html", (err, data) => {
    response.end(data.toString("UTF-8"));
  });
});

server.listen(3000, function() {
  console.log("Server listening...");
});


