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


const arr = [
  'Guitarra Aria pro2',
  'Guitarra ElectricaAria C Mac',
  'Guitarra Española Josep Penades',
  'Flauta travesera',
  'Amplificador Marshall Combo 100',
  'Pedal Metal Zone',
  'Atril',
  'Soporte Guitarra'
]

let str = 'Gu'

function filtraArray(string, array){
  let papa = undefined
  array.forEach(e => {
    if(e.includes(string)){
      papa = e
      return
    }
    
  });
  return papa
};

const pepe =filtraArray(str, arr)
console.log(pepe)

module.exports = buscaNombres;
