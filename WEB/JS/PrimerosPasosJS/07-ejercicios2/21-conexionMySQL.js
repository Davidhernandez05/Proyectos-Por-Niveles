/*
 * Realiza una conexión desde el lenguaje que hayas seleccionado a la siguiente base de datos MySQL:
 * - Host: mysql-5707.dinaserver.com
 * - Port: 3306
 * - User: mouredev_read
 * - Password: mouredev_pass
 * - Database: moure_test
 *
 * Una vez realices la conexión, lanza la siguiente consulta e imprime el resultado:
 * - SELECT * FROM `challenges`
 *
 * Se pueden usar librerías para realizar la lógica de conexión a la base de datos.
 */

// se debe intalar npm install mysql - en la terminal
// Importamos el modulo
const mysql = require("mysql");

// Crear la conexión a la base de datos
const connection = mysql.createConnection({
  host: "mysql-5707.dinaserver.com", // Dirección del servidor de la base de datos
  root: "3306", // Puerto de conexion
  user: "mouredev_read", // Usuario de la base de datos
  password: "mouredev_pass", // Contraseña del usuario
  database: "moure_test", // Nombre de la base de datos
});

// Conectar a la base de datos
connection.connect();

// Realizar una consulta
connection.query("SELECT * FROM challenges", (error, results) => {
  if (error) throw error;
  console.table(results);
});

// Finalizamos la conexión a la BD
connection.end();
