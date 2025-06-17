function ingresarNumeros(num) {
  let arr = [];
  contador = 0;
  while (contador < num) {
    let numero = prompt("Introduce un número: ");
    if (isNaN(numero)) {
      alert("No es un número");
    } else {
      arr.push(parseInt(numero));
    }
    contador++;
  }
  calcularEstadisticas(arr);
}

function calcularEstadisticas(numeros) {
  console.log("Resultados:");
  console.log("-----------------");

  // Suma de los números
  const sumaNumeros = numeros.reduce((a, b) => a + b, 0);
  console.log(`La suma de los números es: ${sumaNumeros}`);

  // Promedio de los números
  let promedio = sumaNumeros / numeros.length;
  if (!isNaN(promedio)) {
    console.log(`El promedio es: ${promedio}`);
  } else {
    console.log("No se ingresaron numeros válidos.");
  }

  // Sacamos el número máximo
  let maximo = Math.max(...numeros);
  if (maximo === -Infinity) {
    console.log("No se han introducido números.");
  } else {
    console.log(`El número máximo es: ${maximo}`);
  }

  // Sacamos el número mínimo
  let minimo = Math.min(...numeros);
  if (minimo === Infinity) {
    console.log("No se han introducido números.");
  } else {
    console.log(`El número mínimo es: ${minimo}`);
  }
}

let num = prompt("¿Cuántos números quieres introducir?: ");
if (isNaN(num)) {
  alert("No es un número");
} else {
  ingresarNumeros(num);
}
