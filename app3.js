// importar o utilizar el paquete filesystem

const fs = require('fs');

// crear constante para el data

const contenido = fs.readFileSync('readme1.md', 'utf8');

// contar las palabras del data

const countPalabras = contenido.split(' ').length;

// determinar una palabra para el conteo React

const contarReact = contenido.match(/react/gi ?? []).length;


console.log('Palabras:' , countPalabras);
console.log('Palabras React:' , contarReact);



