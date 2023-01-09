// creo el router
const descuentoRouter= require('express').Router();
const descuentoController= require('../controllers/DescuentoController');
const userExtractor= require('../middleware/userExtractor');
const multiparty= require('connect-multiparty');
const PATH= multiparty({uploadDir: './uploads/banners'});



descuentoRouter
    .post('/registro_descuento', [PATH,userExtractor], descuentoController.registro_descuento)
    .get('/listar_descuentos', userExtractor, descuentoController.listar_descuentos)
    .get('/obtenerBanner/:img', descuentoController.obtener_banner_descuento)
    .get('/obtener_descuento/:id', userExtractor, descuentoController.obtener_descuento)
    .put('/actualizar_descuento/:id', [userExtractor,PATH], descuentoController.actualizar_descuento)
    .delete('/eliminar_descuento/:id', userExtractor, descuentoController.eliminar_descuento)
    .get('/obtener_descuento_activo', descuentoController.obtener_descuento_activo);
module.exports= descuentoRouter;