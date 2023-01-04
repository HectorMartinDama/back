// creo el router
const descuentoRouter= require('express').Router();
const descuentoController= require('../controllers/DescuentoController');
const userExtractor= require('../middleware/userExtractor');
const multiparty= require('connect-multiparty');
const PATH= multiparty({uploadDir: './uploads/banners'});



descuentoRouter
    .post('/registro_descuento/', userExtractor, descuentoController.registro_descuento)
    .get('/listar_descuentos/:filtro?', userExtractor, descuentoController.listar_descuentos)
    .get('/obtenerPortada/:img', descuentoController.obtener_portada);

