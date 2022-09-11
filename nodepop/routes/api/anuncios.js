const express = require('express');
const router = express.Router();
const {query, validationResult} = require('express-validator');
const Anuncio = require('../../models/Anuncio');

