const express = require('express');
const router = express.Router();
const Anuncio = require('../../models/Anuncio');
const crearTags = require('../../data/crearTags');
const rangePrices = require('../../data/rangePrices');
const buscaNombres = require("../../data/names");
const createHttpError = require("http-errors");
const filtraArray = require("../../data/filtraArray");


//petición de tipo GET para mostrar la lista de anuncios
router.get('/', async (req, res, next) => {
    try {

        const nombres = await buscaNombres();

        //Añadimos filtros
        const tag = req.query.tags;
        const venta = req.query.venta;
        const name = req.query.name;
        const price = req.query.price;

        //paginación
        const skip = req.query.skip;
        const limit = req.query.limit;

        //Ordenación
        const sort = req.query.sort;

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

       if (name) {
        nombres.includes(name)
          ? (filtro.name = name)
          : !nombres.includes(name)
          ? (filtro.name = filtraArray(name, nombres))
          : next(createHttpError(422));
      };

       if(price) {
        filtro.price = rangePrices(price);
       };
       
        const anuncios = await Anuncio.busca(filtro, skip, limit, sort);
        const listTags = await crearTags();

        res.json( {tags: listTags, results: anuncios });// respondemos con un JSON
    } catch(err) { //Si se produce algun error lo capturamos aqui y le pasamos next con el error
        next(err);
    }

});



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