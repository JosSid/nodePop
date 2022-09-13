var express = require('express');
var router = express.Router();
const Anuncio = require('../models/Anuncio')



/* GET home page. */
router.get('/', async function(req, res, next) {
  const anuncios = await Anuncio.find();
  res.render('index', { title: 'NodePop', anuncios });
});

module.exports = router;
