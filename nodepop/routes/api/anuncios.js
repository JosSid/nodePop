const express = require('express');
const router = express.Router();
const {query, validationResult} = require('express-validator');
const Anuncio = require('../../models/Anuncio');
const crearTags = require('../../data/crearTags')


//petición de tipo GET para mostrar la lista de anuncios
router.get('/', async (req, res, next) => {
    try {

        //Añadimos filtros
        const tag = req.query.tags;
        const venta = req.query.venta;
        const name = req.query.name;

        //paginación
        const skip = req.query.skip;
        const limit = req.query.limit;

        //Creo un filtro vacío para pasarselo al metodo de busqueda con los filtros que nos lleguen en la query.
       const filtro = {};
        // Filtro por tag
       if(tag) {
        filtro.tags = tag;
       };
       // Filtro por venta o busqueda
       if(venta){
        filtro.sale = venta;
        if(filtro.sale === 'busco'){
            filtro.sale = false;
        };
        if(filtro.sale === 'vendo') {
            filtro.sale = true;
        };
       };

       if(name) {
        filtro.name = name;
       };


        const anuncios = await Anuncio.busca(filtro, skip, limit);
        const listTags = await crearTags();

        res.json( {tags: listTags, results: anuncios });// respondemos con un JSON
    } catch(err) { //Si se produce algun error lo capturamos aqui y le pasamos next con el error
        next(err);
    }

});

// Get/api/anuncios/tags
// Devuelve los anuncios que incluyan dicho tag.
/* router.get('/:tags', async (req, res, next) => {
    try {

        const tag = req.params.tags;

        const anuncios = await Anuncio.find({tags: tag});

        res.json({results: anuncios});
    } catch(err){
        next(err);
    }
}); */

// PUT /api/anuncios/(_id) {body}
//Para actualizar un anuncio
router.put('/:_id', async (req,res,next) => {
    try{

        const _id = req.params._id;
        const anuncio = req.body;

        const anuncioActualizado = await Anuncio.findOneAndUpdate({_id: _id}, anuncio, {new: true});//new: true nos devuelve el objeto modificado

        res.json({result: anuncioActualizado });

    }catch(err){
        next(err);
    };
});

//POST /api/anuncios {body}
// Parta crear nuevos anuncios
router.post('/', async (req, res, next) => {
    try {

        const nuevoAnuncio = req.body;

        // instanciamos el objeto en memoria
        const anuncio = new Anuncio(nuevoAnuncio);

        // lo guardamos en la base de datos
        const anuncioCreado = await anuncio.save();

        res.json({result: anuncioCreado})

    } catch(err){
        next(err);
    }
});

// DELETE /api/anuncios/:_id
// Para borrar un anuncio
router.delete('/:_id', async (req, res, next) => {
    try {

        const _id = req.params._id;

        await Anuncio.deleteOne({_id: _id});

        res.json();//no le pasamos nada en el objeto,solo respondemos para que de el status OK

    }catch(err){
        next(err);
    }
});

module.exports = router;