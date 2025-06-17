let i = 0;

while (i < 6) {
  i++;
  if (i === 2) {
    continue;
  }
  console.log(i);
}
console.log('Fin del While Continue.');

i = 0;
while (i <= 9) {
  if (i === 4) {
    console.log('El numero es 4.');
    break;
  }
  console.log.apply(i);
  i++;
}
console.log('Fin del while por breack.');