// creo el router
const envioRouter= require('express').Router();
const envioController= require('../controllers/EnvioController');
const userExtractor= require('../middleware/userExtractor');
const validatePrincipalDireccion= require('../validators/validatePrincipalDireccion');

// metodos del router
envioRouter
    .post('/registro_envio', validatePrincipalDireccion, userExtractor, envioController.registro_envio)
    .get('/obtener_tipo_envio', envioController.obtener_tipos_envio);

module.exports= envioRouter;