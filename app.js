// const { crearArchivo } = require('./helpers/multiplicar');
const { crearArchivo } = require('./helpers/multiplicar-listar');
//Requerimos Yargs
const argv = require('./config/yargs');
//Require colors
require('colors');

//Limpiamos la consola cuando se ejecuta el archivo app.js
console.clear();

//Pasando por consola de comando la base 'node app.js --base=X'; sin usar yargs.
// console.log(process.argv);
// const [,,arg8] = process.argv;
// console.log(arg8)
// const [, nuevaBase] = arg8.split('=');
// console.log(nuevaBase);

//Usando yargs, captar los datos input ingresados por consola.
// console.log(`base: ` + argv.b + `, listar: ` + argv.l);
// console.log( argv )

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));