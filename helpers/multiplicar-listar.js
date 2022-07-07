//Requerimos el paquete de FyleSystem. Para escribir un archivo de salida.
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        //Variable para la salida.
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.blue} ${i} ${'='.blue} ${base * i}\n`;
        }

        if (listar) {
            console.log(`==================`.green);
            console.log(`   Tabla del: `.rainbow, colors.blue(base) );
            console.log(`==================`.green);

            console.log(consola);

            fs.writeFileSync(`./output/tabla-${base}.txt`, salida);

            return `Tabla del ${base} creada de manera exitosa.`.bold;
        } else {
            fs.writeFileSync(`./output/tabla-${base}.txt`, salida);
            return `Tabla del ${base} creada de manera exitosa.`.bold;
        }
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
}