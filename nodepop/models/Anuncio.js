const mongoose = require('mongoose');

// definimos el esquema
const anuncioSchema = mongoose.Schema({
    name: String,
    sale: Boolean,
    price: Number,
    photo: String,
    tags: [String]
});

// Creamos un metodo estatico para filtrar resultados en el buscador
anuncioSchema.statics.busca = function(filtro) {
    return Anuncio.find(filtro);

}

// creamos el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

// exportamos el modelo
module.exports = Anuncio;