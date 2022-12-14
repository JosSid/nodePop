var express = require("express");
var router = express.Router();
const Anuncio = require("../models/Anuncio");
const crearTags = require("../data/crearTags");
const buscaNombres = require("../data/names");
const createHttpError = require("http-errors");
const rangePrices = require("../data/rangePrices");
const filtraArray = require("../data/filtraArray");

/* GET home page. */
router.get("/", async function (req, res, next) {
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
    if (tag) {
      filtro.tags = tag;
    };
    // Filtro por venta o busqueda
    if (venta) {
      filtro.sale = venta;
      if (filtro.sale === "busco") {
        filtro.sale = false;
      }
      if (filtro.sale === "vendo") {
        filtro.sale = true;
      }
    };

    if (name) {
      nombres.includes(name)
        ? (filtro.name = name)
        : !nombres.includes(name)
        ? (filtro.name = filtraArray(name, nombres))
        : next(createHttpError(422));
    };

    if (price) {
      filtro.price = rangePrices(price);
    };

    const anuncios = await Anuncio.busca(filtro, skip, limit, sort);
    const listTags = await crearTags();

    res.render("index", { title: "NodeRock", anuncios, listTags });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
