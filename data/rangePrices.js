'use strict';

const Anuncio = require('../models/Anuncio');

function rangePrices(string){
    let filtro =  {};
        
    const arrStr = string.split('-');
        
    if(string.includes('-')){
        filtro.$gte = parseInt(arrStr[0], 10);
        filtro.$lte = parseInt(arrStr[1], 10);
        if(Number.isNaN(filtro.$gte)) {
            filtro.$gte = 0;
        };
        if(Number.isNaN(filtro.$lte)) {
            filtro.$lte = Number.MAX_SAFE_INTEGER;
        };
    };
        
    if(!string.includes('-')){
         filtro = parseInt(string);
    };

    return filtro;
};






module.exports = rangePrices;