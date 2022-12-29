// creo el router
const carritoRouter= require('express').Router();
const carritoController= require('../controllers/CarritoController');
const userExtractor= require('../middleware/userExtractor');
const validateCarrito= require('../validators/duplicateProductTrolley');


// metodos del router
carritoRouter
    .post('/agregar_carrito_cliente', validateCarrito, userExtractor, carritoController.agregar_carrito_cliente);



module.exports= carritoRouter;