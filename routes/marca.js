const marcaRouter= require('express').Router();
const userExtractor = require('../middleware/userExtractor');
const marcaController= require('../controllers/MarcaController');
const validateMarca = require('../validators/validateMarca');


marcaRouter
    .post('/createMarca', validateMarca, userExtractor, marcaController.registro_marca)
    .get('/allMarcas', userExtractor, marcaController.all_marcas)
    .delete('/borrarMarca/:id', userExtractor, marcaController.eliminar_marca)
    .get('/obtenerMarcas', marcaController.obtener_marcas)
    .delete('/borrarSeleccionadosMarca/:idMarcas', userExtractor, marcaController.eliminar_seleccionados_marca);




module.exports= marcaRouter;