let edad = 18;


function ingreso(num) {
  if (num >= 18) {
    console.log('Puedes ingresar.');
  }
  else if (num >= 13 && num < 18) {
    console.log('Puedes ingresar pero con un acompañante.')
  }
  else {
    console.log('No puedes ingresar.');
  }
}


ingreso(edad);