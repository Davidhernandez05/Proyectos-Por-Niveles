const os = require("node:os");

console.log("Info del sistema operativo: ");
console.log("---------------------------------");

console.log("Nombre del sistema operativo: ", os.platform());
console.log("Version del sistema operativo: ", os.release());
console.log("Arquitectura del sistema operativo: ", os.arch());
console.log("Cantidad de CPUs: ", os.cpus()); // -> Vamos a poder escalar procesos en Node.
console.log("Memoria total: ", os.totalmem() / 1024 / 1024 + " MB");
console.log("Memoria libre: ", os.freemem() / 1024 / 1024 + " MB");

console.log("uptime: ", os.uptime() / 60 / 60 + " horas"); // -> Tiempo que lleva encendido el sistema operativo
