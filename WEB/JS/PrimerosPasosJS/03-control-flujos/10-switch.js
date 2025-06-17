let fruta = 'Anon';

switch (fruta) {
  case 'Pera':
    console.log('Las peras cuestan 10.');
    break;
  case 'Banano':
    console.log('El banano cuesta 5.');
    break;
  case 'Uva':
    console.log('las Uvas cuestan 7.');
    break;
  case 'Manzana':
    console.log('Las manzanas cuestan 9.');
    break;
  default:
    console.log(`${fruta}, no esta en el inventario en el momento.`)
    break;
}