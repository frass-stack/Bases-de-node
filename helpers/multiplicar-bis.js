//Requerimos el paquete de FyleSystem. Para escribir un archivo de salida.
const fs = require('fs');

let salida = '';

const crearMultiplicacion = (base = 5) => {
    return promesa = new Promise((resolve, reject) => {

        console.log(`==================`);
        console.log(`   Tabla del ${base}    `);
        console.log(`==================`);

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        console.log(salida);

        if(salida){
            resolve(
                fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
                    if (err) throw err;
                    console.log(`tabla-${base}, creado exitosamente`);
                })
            )
        }else{
            reject(
                `Se producido un error, por lo cual el archivo tabla-${ base } no pudo crearse correctamente`
            )
        }
    })
}

const crearArchivo = async (base) => {
    try{
        let resultado = await crearMultiplicacion(base);
        return `El nombre del archivo es tabla de ${base}.`
    }catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivo
}