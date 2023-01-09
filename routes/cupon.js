// creo el router
const cuponRouter= require('express').Router();
const cuponController= require('../controllers/CuponController');
const userExtractor= require('../middleware/userExtractor');
const validateCupon = require('../validators/validateCupon');
const validateCorrectCupon = require('../validators/validateCorrectCupon');



// metodos del router
cuponRouter
    .post('/createCupon', validateCupon, userExtractor, cuponController.registro_cupon)
    .get('/allCupones', userExtractor, cuponController.all_cupones)
    .get('/obtenerCupon/:id', userExtractor, cuponController.obtener_cupon)
    .put('/actualizaCupon/:id', validateCupon ,userExtractor, cuponController.actualizar_cupon)
    .delete('/borrarCupon/:id', userExtractor, cuponController.eliminar_cupon)
    .get('/validarCupon/:cupon', userExtractor, validateCorrectCupon);




module.exports= cuponRouter;