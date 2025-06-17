/**
 * Crea una clase CuentaBancaria con un método retirar que lance un error si el saldo es insuficiente.
 */

class NoTienesSaldoError extends Error {
  constructor(saldo, cantidad) {
    super(`Tienes ${saldo}, no puedes retirar: ${cantidad}`);
    this.name = "Saldo insuficiente.";
  }
}

class Cuentabancaria {
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.saldoInicial = saldoInicial;
  }

  retiro(cantidad) {
    let saldoActual;
    if (this.saldoInicial < cantidad) {
      throw new NoTienesSaldoError(this.saldoInicial, cantidad);
    } else {
      saldoActual = this.saldoInicial - cantidad;
      console.log(`Transaccion Aprobada`);
      console.log(`Tu saldo actual es de: ${saldoActual}`);
    }
  }
}

try {
  const cuanta1 = new Cuentabancaria("David", 300);
  cuanta1.retiro(500);
} catch (error) {
  console.log(error.name);
  console.log("Error: ", error.message);
}
