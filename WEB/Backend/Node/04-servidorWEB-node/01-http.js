const http = require("node:http"); // Protocolo http
const { findAvaliblePort } = require("./02-free-port.js");

const desiredPort = process.env.PORT ?? 3000; // Esto nos permite cambiar el valor en la terminal -> PORT = 200

const server = http.createServer((req, res) => {
  console.log("Requies received.");
  res.end("Hola Mundo");
});

// Aqui estariamos utilizando el puerto 3000.
//server.listen(3000, () => {
//  console.log("El servidor esta escuchando en el puerto 3000");
//});

// De esta forma hacemos que Node escoja un puerto disponible de forma automatica:

//server.listen(0, () => {
//  console.log(
//    `El servidor esta escuchando el puerto: http://localhost:${
//      server.address().port
//    }`
//  );
//});

findAvaliblePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(
      `El servidor esta escuchabdo el puerto: http://localhost:${port}`
    );
  });
});
