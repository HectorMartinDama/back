// creo el router
const cuponRouter= require('express').Router();
const cuponController= require('../controllers/CuponController');
const userExtractor= require('../middleware/userExtractor');


// metodos del router
cuponRouter
    .post('/createCupon', userExtractor, cuponController.registro_cupon)
    .get('/allCupones', userExtractor, cuponController.all_cupones)
    .get('/obtenerCupon/:id', userExtractor, cuponController.obtener_cupon)
    .put('/actualizaCupon/:id', userExtractor, cuponController.actualizar_cupon)
    .delete('/borrarCupon/:id', userExtractor, cuponController.eliminar_cupon);




module.exports= cuponRouter;