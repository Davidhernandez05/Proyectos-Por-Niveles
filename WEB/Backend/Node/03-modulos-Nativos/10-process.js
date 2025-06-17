// Argumentos de entrada al ejecutar un proceso.

console.log(process.argv);

// Controlar el proceso y su salida.
// process.exit(1);

// Podemos controlar los eventos del proceso.
process.on("exit", () => {
  //limpiar los recursos.
});

//Current Working Directory: Nos dice desde donde se ejecute el proceso.
console.log(process.cwd());

// Plataform
console.log(process.env.pepito);
