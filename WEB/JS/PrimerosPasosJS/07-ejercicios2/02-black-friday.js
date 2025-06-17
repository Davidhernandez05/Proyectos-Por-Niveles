function calcularPrecioDescuento (precio, descuentoPorcentaje) {
  
  const descuento = (precio * descuentoPorcentaje) / 100;
  const precioFinal = precio - descuento;
  
  return precioFinal;
}

function disponibilidadPrendas (unidadesDisponibles) {
  if (unidadesDisponibles >= 1) {
    let disponibilidad = true;
    return {
      unidadesDisponibles,
      disponibilidad
    }
  }
  else {
    disponibilidad = false;
    return {
      unidadesDisponibles,
      disponibilidad
    }
  }
}

function ropa (precioInicial, valorDescuento, Color) {
  
  let camisetas = {
    referencia: 1,
    tipo: 'Mangacorta',
    disponibilidad: disponibilidadPrendas(10),
    precioConDescuento: calcularPrecioDescuento(precioInicial, valorDescuento),
    ColorCamiseta: Color 
  };

  return camisetas;
}


const precioInicial = 100;
const valorDescuento = 20;

let comprarRopa = ropa(precioInicial, valorDescuento, 'Negro');
console.log(comprarRopa);

console.log(`Precio original: $${precioInicial}`);
console.log(`Descuento: ${valorDescuento}%`)
console.log(`Precio Final: $${comprarRopa.precioConDescuento}`);