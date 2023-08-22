// importar o utilizar el paquete filesystem

const fs = require('fs');

// crear constante para el data

const data = fs.readFileSync('readme1.md', 'utf8');

console.log(data);

