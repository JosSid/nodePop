'use strict';

const Anuncio = require('../models/Anuncio');

async function buscaNombres() {
    const anuncios = await Anuncio.find();
    const names = [];
    for(let anuncio of anuncios){
        names.push(anuncio.name)
      };
      return names;
};

module.exports = buscaNombres;
