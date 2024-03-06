// 4. Ejercicio: un servidor básico

var http = require("http");
var server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  response.end("<h2>Wake up Neo...<h2>\n");
});

// Arrancando el servidor

server.listen(1337, "127.0.0.1");
console.log("Servidor arrancado en 127.0.0.1:1337");
