'use strict';

const Anuncio = require('../models/Anuncio');

function rangePrices(string){
    const filtro = {price: {
        $gte: undefined,
        $lte: undefined
        }}
        const str = string;
        
        const arrStr = str.split('-')
        
        if(str.includes('-')){
            filtro.price.$gte = parseInt(arrStr[0], 10);
            filtro.price.$lte = parseInt(arrStr[1], 10);
            if(Number.isNaN(filtro.price.$gte)) {
                filtro.price.$gte = undefined;
            };
            if(Number.isNaN(filtro.price.$lte)) {
                filtro.price.$lte = undefined;
            };
        };
        
        if(!str.includes('-')){
            filtro.price = parseInt(str);
        };

    return filtro;
};




const filtro = rangePrices('200');
console.log(filtro)

