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
anuncioSchema.statics.buscar = function(filtro, skip, limit, fields, sort) {
    const query = Anuncio.find(filtro);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort)
    return query.exec();
}

// creamos el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

// exportamos el modelo
module.exports = Anuncio;