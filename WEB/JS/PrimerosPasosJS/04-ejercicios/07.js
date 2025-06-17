/**
 * Crea un algoritmo
 * Que regrese el precio de un producto mas el impuesto.
 */

function precioFinal(precioInicial, IVA) {
  
  IVA = precioInicial * IVA; // Hacemos la operacion para saber cuanto es el Iva del Producto.
  console.log("Subtotal: " + precioInicial);
  console.log("El impuesto de venta del 6% Equivale a: " + IVA);

  return precioInicial = precioInicial + IVA; //Le sumamos el IVA al precio del producto.
  
}
function valorIVA(num){
  return num = num / 100; // Transformamos de % a decimal el IVA.
}

let resultado = precioFinal(20, valorIVA(6));
console.log(`El precio final del producto es: ${resultado}`);