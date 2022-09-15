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
anuncioSchema.statics.busca = function(filtro, skip, limit) {
    const query = Anuncio.find(filtro);
    query.skip(skip);
    query.limit(limit);
    return query.exec();
};

// creamos el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

// exportamos el modelo
module.exports = Anuncio;