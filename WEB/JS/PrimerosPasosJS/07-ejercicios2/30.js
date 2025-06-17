/*
 * Crea las funciones capaces de transformar colores HEX
 * a RGB y viceversa.
 * Ejemplos:
 * RGB a HEX: r: 0, g: 0, b: 0 -> #000000
 * HEX a RGB: hex: #000000 -> (r: 0, g: 0, b: 0)
 */

function rgbaHex(rgba) {
  // Extraer los valores de la cadena RGBA
  let inicial = rgba.indexOf("(") + 1;
  let final = rgba.indexOf(")");
  let valores = rgba.slice(inicial, final).split(",");

  // Valores RGBA
  let rojo = valores[0];
  let verde = valores[1];
  let azul = valores[2];
  let alpha = valores[3];

  // Función para convertir un número a hexadecimal de 2 dígitos
  function aHex(valor) {
    // Asegura que el valor esté en el rango 0-255
    valor = Math.max(0, Math.min(255, valor));
    // Convierte a hexadecimal y rellena con 0 si es necesario
    return valor.toString(16).padStart(2, "0");
  }

  // Convertir el alpha (0-1) a un valor hexadecimal (00-ff)
  function aHexAlpha(alpha) {
    // Asegura que el alpha esté en el rango 0-1
    alpha = Math.max(0, Math.min(1, alpha));
    // Convierte a un valor entre 0 y 255, luego a hexadecimal
    return Math.round(alpha * 255)
      .toString(16)
      .padStart(2, "0");
    // padStart es un método de strings que rellena la cadena con un valor dado hasta que alcance la longitud especificada
  }

  // Convertir cada componente a hexadecimal
  let hexRojo = aHex(rojo);
  let hexVerde = aHex(verde);
  let hexAzul = aHex(azul);
  let hexAlpha = aHexAlpha(alpha);

  // Concatenar los valores
  let hexColor = `#${hexRojo}${hexVerde}${hexAzul}${hexAlpha}`;
  return hexColor;
}

function hexaRgb(hex) {
  // Extraer los valores de la cadena HEX
  let valores = hex.slice(1).match(/.{2}/g); // Separar en grupos de 2 caracteres

  // Valores HEX
  let rojo = parseInt(valores[0], 16); // Convertir a decimal
  let verde = parseInt(valores[1], 16);
  let azul = parseInt(valores[2], 16);
  let alpha = parseInt(valores[3], 16) / 255; // Convertir a un valor entre 0 y 1

  // Concatenar los valores
  let rgbaColor = `rgba(${rojo}, ${verde}, ${azul}, ${alpha.toFixed(1)})`; // toFixed redondea a 1 decimal
  return rgbaColor;
}

console.log(rgbaHex("rgba(255, 255, 255, 0.5)")); // #FFFFFF80
console.log(hexaRgb("#FFFFFF80")); // rgba(255, 255, 255, 0.5)
