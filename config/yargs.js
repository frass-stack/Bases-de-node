//Requerimos Yargs
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: 'true',
        describe: "Toma la base de la multiplicacion"
    })
    .option('l', {
        alias:'listar',
        type:'boolean',
        default:false,
        describe: "Muestra la tabla en consola"
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: 'true',
        describe: "Toma los multiplos para la multiplicacion"
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw `La base debe ser un numero`;
        }else if(isNaN(argv.h)){
            throw `La cantidad de multiplos debe ser representada por un valor numerico`
        }
        return true;
    })
    .argv;

    module.exports = argv;