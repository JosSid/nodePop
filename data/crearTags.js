'use strict';
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

  module.exports = crearTags;