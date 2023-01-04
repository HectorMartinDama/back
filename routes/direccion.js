// creo el router
const direccionRouter= require('express').Router();
const direccionController= require('../controllers/DireccionController');
const userExtractor= require('../middleware/userExtractor');
const validatePrincipalDireccion= require('../validators/validatePrincipalDireccion');

// metodos del router
direccionRouter
    .post('/registro_direccion', validatePrincipalDireccion, userExtractor, direccionController.registro_direccion)
    .get('/obtener_direcciones_cliente/:idCliente', userExtractor, direccionController.obtener_direcciones_cliente)
    .put('/cambiar_direccion_principal_cliente/:id/:idCliente', userExtractor, direccionController.cambiar_direccion_principal_cliente)
    .get('/obtener_direccion_principal_cliente/:idCliente', userExtractor, direccionController.obtener_direccion_principal_cliente);

module.exports= direccionRouter;