

// Variable para inicializar el controlador de admin 
const adminController = require('../controllers/AdminController');
const userExtractor = require('../middleware/userExtractor');
const validateLoginAdmin = require('../middleware/validateLoginAdmin');
const validateCreateAdmin= require('../validators/createAdmin');

// Creo el router
const adminRouter = require('express').Router();

// metodos del router (api).
adminRouter
    .post('/registro_admin', validateCreateAdmin, adminController.registro_admin)
    .post('/login_admin', validateLoginAdmin, adminController.login_admin)
    .get('/allClient_admin', userExtractor, adminController.allClients_admin);


module.exports = adminRouter;