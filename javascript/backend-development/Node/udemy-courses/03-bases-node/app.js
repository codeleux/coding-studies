const { createDocument } = require('./helpers/multiply');

console.clear();

const [ , , arg3 = 'base=5' ] = process.argv;
const [ , base = 5 ] = arg3.split('=');

// const base = 5;

createDocument(base)
    .then(docName => console.log(docName, 'ha sido creado!'))
    .catch(err => console.log(err));