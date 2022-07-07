//Requerimos el paquete de FyleSystem. Para escribir un archivo de salida.
const fs = require('fs');




const crearArchivo = async (base = 5) => {
    try {
        console.log(`==================`);
        console.log(`   Tabla del ${ base }    `);
        console.log(`==================`);
        
        //Variable para la salida.
        let salida = '';
    
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
    
        console.log(salida);
    
        fs.writeFileSync(`tabla-${ base }.txt`, salida);        

        return `Tabla del ${ base } creada de manera exitosa.`
    } catch (error) {
        throw err;
    }
};

module.exports = {
    crearArchivo
}
   
    
    
    // let contador = 1;
    // while (contador <= baseTabla) {
    //     tablaDelX(contador);
    //     console.log(salida);
    //     fs.writeFile(`tabla-${contador}.txt`, salida, (err) => {
    //         if (err) throw err;
    //         console.log(`tabla-${contador}, creado exitosamente`);
    //     });
    //     contador++;
    // };
