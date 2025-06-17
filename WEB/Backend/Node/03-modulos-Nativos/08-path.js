const path = require("node:path");

console.log(path.sep); // Nos muestra con cual: "/" "\" se separa las carpetas en nuestro SO.

// Unir rutas con path.join:
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

// Ficheros:
const base = path.basename("/tmp/david-secret-file/passwords.txt");
console.log(base);

const fileName = path.basename("/tmp/david-secret-file/passwords.txt", ".txt");
console.log(fileName);

const extension = path.extname("imagen.jpg"); // Nos dice que extension tiene un arhico, es muy importante.
console.log(extension);
