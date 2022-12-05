// creo el router
const cuponRouter= require('express').Router();
const cuponController= require('../controllers/CuponController');
const userExtractor= require('../middleware/userExtractor');





module.exports= cuponController;