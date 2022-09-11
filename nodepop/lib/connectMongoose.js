const mongoose = require('mongoose');

// Para en caso de que haya un error de conexion volver a reestablecer la conexion
mongoose.connection.on('error', err => {
    console.log('Error de conexión', err);
    process.exit(1);
});

//La primera vez que se conecte nos mostrara esto
mongoose.connection.once('open', () => {
    console.log('Conectado a MongoDB en', mongoose.connection.name);
});

// Conectar mongoDB
mongoose.connect('mongodb://localhost/nodepop');

// Exportar la conexión de mongoose
module.exports = mongoose.connection;