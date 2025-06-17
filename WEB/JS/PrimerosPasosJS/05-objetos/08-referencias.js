
let a = {};
let b = a;

b.prop = 1;
console.log(a, b);



let c = 1;

function suma(n) {
  n++;
}

suma(c);
console.log(c);



let h = {prop: 1};

function otro(m) {
  m.prop++;
}
otro(h);
console.log(h);

/**
 * Muy importante:
 * los tipos de datos primitivos se copian.
 * Los tipos de datos de referencia se referencián.
 */