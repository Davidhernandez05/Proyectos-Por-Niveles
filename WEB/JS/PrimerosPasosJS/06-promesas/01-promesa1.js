/**
 * Se declara como: promise()
 *
 * Estados de la promesa:
 * 1. pending
 * 2. fullfilled
 * 3. Rejected
 *
 * callbacks:
 * 1. resolve
 * 2. reject
 *
 * Metodos:
 * 1. Then() -> Se ejecuta cuando la promesa se resuelve.
 * 2. catch() -> Nos permite obtener el error cuando la promesa no se resuelve, esto para imprimirlo.
 */

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let operation = true;
    if (operation === true) {
      resolve("La operación fue exitosa");
    } else {
      reject("Fallo la operación");
    }
  }, 2000); // Los 2000 son los segundos que va a tardar.
});

promesa
  .then((successMessage) => {
    // Ingresa cuando la promesa se resuelve de forma exitosa -> El resolve
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    // Ingresa cuando la primesa falla. -> el reject
    console.log(errorMessage);
  });
