

// Variable para inicializar el controlador de admin 
const adminController = require('../controllers/AdminController');
const validateLoginAdmin = require('../middleware/validateLoginAdmin');

// Creo el router
const adminRouter = require('express').Router();

// metodos del router (api).
adminRouter
    .post('/registro_admin', adminController.registro_admin)
    .post('/login_admin', validateLoginAdmin, adminController.login_admin);




module.exports = adminRouter;