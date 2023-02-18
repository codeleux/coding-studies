const fs = require('node:fs');

const createDocument = async (base = 5) => {
    try {
        console.log('--------------------------------');
        console.log('         Tabla del: ', base);
        console.log('--------------------------------');
    
        let output = '';
    
        for (let i = 1; i <= 10; i++) {
            output += (`${base} x ${i} = ${base * i}\n`);
        }
        
        console.log(output);
    
        fs.writeFileSync(`tabla-${base}.txt`, output);
    
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = { createDocument };