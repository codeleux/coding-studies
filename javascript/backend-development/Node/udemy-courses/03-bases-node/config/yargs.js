require('colors')

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'La base de la tabla de multiplicar'.yellow
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla de multiplicar'.yellow
    })
    .option('u', {
        alias: 'upto',
        type: 'number',
        describe: 'El limite de la multiplicación'.yellow
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }
        if (isNaN(argv.u)) {
            throw 'El limite tiene que ser un número'
        }

        return true;
    })
    .argv;

module.exports = argv;