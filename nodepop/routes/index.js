var express = require('express');
const { find } = require('../models/Anuncio');
var router = express.Router();
const Anuncio = require('../models/Anuncio');

async function crearTags() {
  const anuncios = await Anuncio.find();
  const tagsList = []
  for(let anuncio of anuncios){
    for(let tag of anuncio.tags){
      tagsList.push(tag)
    }
  }

  const tags = [...new Set(tagsList)].join(' , ')
  return tags
};





/* GET home page. */
router.get('/', async function(req, res, next) {
  const anuncios = await Anuncio.find();
  const listTags = await crearTags();
  res.render('index', { title: 'NodeRock', anuncios, listTags });
});

module.exports = router;
