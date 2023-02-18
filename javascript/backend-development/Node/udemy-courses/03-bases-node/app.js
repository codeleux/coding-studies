const { createDocument } = require('./helpers/multiply');
const argv = require('./config/yargs');

require('colors')

console.clear();


console.log(argv);


createDocument(argv.b, argv.l, argv.u, argv)
    .then(docName => console.log(`${docName} ha sido creado!`.green))
    .catch(err => console.log(`${err}`.red));