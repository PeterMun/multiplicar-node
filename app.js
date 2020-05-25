//requireds
//const fs = require('fs');
//const fs = require('express');//paquete que no son nativos de nodejs
//const fs = require('fs');//paqeutes que nosotros creamos

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        console.log('Listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        console.log('crear');
        break;

    default:
        console.log('comando no reconocido');

}


//let base = '7';

//console.log(process.argv);

//let argv2 = process.argv;

//console.log(argv.base);
//console.log('Limite', argv.limite);
// console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1]

//console.log(base);


//let data = '';


/* for (let i = 1; i <= 10; i++) {
    data += `${ base } * ${ i } = ${base * i} \n`;

}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`el archivo tabla-${base}.txt ha sido creado`);
}) */


// crearArchivo(base)
//     .then(archivo => console.log(`archivo creado: ${archivo}`))
//     .catch(e => console.log(e));