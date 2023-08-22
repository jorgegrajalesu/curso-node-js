// importar o utilizar el paquete filesystem

const fs = require('fs');

// crear constante para el data

const contenido = fs.readFileSync('readme1.md', 'utf8');

// contar las palabras del data

const countPalabras = contenido.split(' ').length;

console.log(countPalabras);



