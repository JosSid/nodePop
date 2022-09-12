const mongoose = require('mongoose');

// definimos el esquema
const anuncioSchema = mongoose.Schema({
    name: String,
    sale: Boolean,
    price: Number,
    photo: String,
    tags: [String]
});

// creamos el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

// exportamos el modelo(opcional)
module.exports = Anuncio;