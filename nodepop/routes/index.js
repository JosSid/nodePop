var express = require('express');
const { find } = require('../models/Anuncio');
var router = express.Router();
const Anuncio = require('../models/Anuncio');
const crearTags = require('../data/crearTags')



/* GET home page. */
router.get('/', async function(req, res, next) {
  const anuncios = await Anuncio.find();
  const listTags = await crearTags();
  res.render('index', { title: 'NodeRock', anuncios, listTags });
});

/* GET pagina filtrada por tags de busqueda. */
router.get('/tags/:tag?', async (req, res, next) => {
  const tag = req.params.tag;
  const anuncios = await Anuncio.find({tags: tag})
  const listTags = await crearTags();
  res.render('index', { title: 'NodeRock' , anuncios, listTags})
});

/* GET pagina filtrada por venta o busqueda. */
router.get('/sale/:sale?', async (req, res, next) => {
  let sale = req.params.sale;
  if(sale === 'busco'){
    sale = false
  }
  if(sale === 'vendo') {
    sale = true
  }
  const anuncios = await Anuncio.find({sale: sale});
  const listTags = await crearTags();
  res.render('index', { title: 'NodeRock' , anuncios, listTags})
});

module.exports = router; 
