
// creo el router
const productRouter= require('express').Router();
const userExtractor = require('../middleware/userExtractor');
const existProduct= require('../middleware/existProduct');
const productoController= require('../controllers/ProductoController');
const multiparty= require('connect-multiparty');
const PATH= multiparty({uploadDir: './uploads/productos'});



// metodos del router
productRouter
    .post('/createProduct', [PATH, userExtractor], productoController.registro_producto)
    .get('/allProducts' ,userExtractor, productoController.all_producto)
    .get('/obtenerPortada/:img', productoController.obtener_portada)
    .get('/obtenerProducto/:id', [existProduct, userExtractor], productoController.obtener_producto);


module.exports= productRouter;