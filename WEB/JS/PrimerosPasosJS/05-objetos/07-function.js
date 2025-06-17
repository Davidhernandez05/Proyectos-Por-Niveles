
function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function () { console.log('Dibujando...'); }
}

let punto = { z: 8 };
Punto.call(Punto, 1, 2); // Nos sirve para extender objetos y funciones.
console.log(punto);

let punto2 = { z: 8 };
Punto.apply(punto2, [2, 3]); // Nos sirve para extender objetos y funciones. 
console.log(punto2);


/**
 * Esto no de deberia de utilizar:
 * 
 * const point = new function ('x', 'y', '') {
    this.x = x
    this.y = y
    this.dibujar = function () {
      console.log('Dibujando...')
    }
  }

  const p = new point(1, 2);
  console.log(p)
 */
