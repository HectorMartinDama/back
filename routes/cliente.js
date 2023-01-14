
// Variable para inicializar el controlador de cliente 
const clienteController = require('../controllers/ClienteController');
const validateLoginClient = require('../middleware/validateLoginClient');
const validateCreateClient= require('../validators/createClient');
const userExtractor = require('../middleware/userExtractor');

// Creo el router
const clienteRouter = require('express').Router();

// Ruta que gestiona el motodo registro_cliente - El registro manda datos al backend por lo tanto sera un metodo post
// Metodo post por que es un registro
// La ruta / registro_cliente esta vinculada al controlador clienteController al metodo registro_cliente
clienteRouter
    .post('/registro_cliente', validateCreateClient, clienteController.registro_cliente)
    .post('/login_cliente', validateLoginClient, clienteController.login_cliente)
    .put('/actualizar_perfil/:id', userExtractor, clienteController.actualizar_perfil)
    .post('/enviar_mensaje_contacto', clienteController.enviar_mensaje_contacto)
    .get('/obtener_cliente/:id', userExtractor, clienteController.obtener_cliente)
    .get('/obtener_pedidos_cliente/:id', userExtractor, clienteController.obtener_pedidos_cliente)
    .get('/obtener_detalle_pedido_cliente/:id', userExtractor, clienteController.obtener_detalle_pedido_cliente);


module.exports = clienteRouter;