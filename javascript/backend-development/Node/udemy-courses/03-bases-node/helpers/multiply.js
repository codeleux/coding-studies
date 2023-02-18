const fs = require('node:fs');

const createDocument = async (base = 5, list = false, upto = 10 ) => {
    try {
        
        let output = '';
        
        for (let i = 1; i <= upto; i++) {
            output += (`${base} x ${i} = ${base * i}\n`);
        }
        
        if(list) {
            console.log('--------------------------------'.bgGreen);
            console.log(`         Tabla del: ${base}           `.bgGreen);
            console.log('--------------------------------'.bgGreen);
            console.log(output.america.underline);
        }

        fs.writeFileSync(`./output/tabla-${base}.txt`, output);
    
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = { createDocument };