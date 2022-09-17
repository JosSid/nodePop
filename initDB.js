'use strict'
// readline para la pregunta
const readline = (require('readline'));

const instrumentos = require('./data/instrumentos');
// Conectar a la base de datos
const connection = require('./lib/connectMongoose');

// Cargar los modelos
const Anuncio = require('./models/Anuncio');

async function main() {

     await connection.$initialConnection

    const continuar = await pregunta('Estas seguro, seguro, seguro que quieres borrar la base de datos y dejarla en su estado inicial? ( si / no ) ');

    if(!continuar) {
        process.exit();
    };

    // Inicializar la coleccion de anuncios
    await initAnuncios();

    connection.close();

};



main().catch(err => console.log('Se ha producido un error:', err));

async function initAnuncios() {
    // borrar todos los documentos de anuncios
    const deleted = await Anuncio.deleteMany();
    console.log(`Eliminados ${deleted.deletedCount} anuncios`);

    // Crear anuncios de inicio
    const inserted = await Anuncio.insertMany(instrumentos);
    console.log(`Creados ${inserted.length} anuncios.`);
};

function pregunta(texto){
    return new Promise((resolve, reject) => {
        const ifc = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        ifc.question(texto, respuesta => {
            ifc.close();
            if(respuesta.toLowerCase() === 'si') {
                resolve(true);
                return;
            }
            resolve(false);
        });
    });


};