/**
 * Nombre -> Ancho x Alto:
 * 8K   -> 1680 x 
 * 4K   -> 3640 x 2160
 * WQHD -> 2560 x 1440
 * FHD  -> 1920 x 1080
 * HD   -> 1280 x 720
 */

function resolucion(ancho, alto) {
  if (ancho >= 7680 && alto >= 4320) {
    return 'La resolucion es de: 8K';
  }
  else if (ancho >= 3640 && alto >= 2160) {
    return 'La resolucion es de: 4K';
  }
  else if (ancho >= 2560 && alto >= 1440) {
    return 'La resolucion es de: WQHD';
  }
  else if (ancho >= 1920 && alto >= 1080) {
    return 'La resolucion es de: FHD';
  }
  else if (ancho >= 1280 && alto >= 720) {
    return 'La resolucion es de: HD';
  }
  else {
    return 'La resolucion es muy baja.'
  }
}

let nom = resolucion(1919, 1090);
console.log(nom);