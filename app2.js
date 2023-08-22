// importar o utilizar el paquete filesystem

const fs = require('fs');

// crear constante para el data

const data = fs.readFileSync('readme1.md', 'utf8');

// actualizar la data
const nuevaInfo = data.replace(/React/ig, 'Angular');

fs.writeFileSync('readme1-angular.md', nuevaInfo);

console.log(data);

