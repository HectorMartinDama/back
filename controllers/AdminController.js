
// Variable para inicializar el modelo de admin en el controlador
const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const jwtHelper = require('../helpers/jwt');

// Funciones admin
const registro_admin = (async (req, res) =>{
    const { nombre, apellidos, email, password, rol, telefono } = req.body;
    // encrypt password
    const saltRounds = 10;
    const passwordHash= await bcrypt.hash(password, saltRounds);

    // creo el usuario admin
    const admin= new Admin({
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        password: passwordHash,
        rol: rol,
        telefono: telefono
    });
    const savedAdmin = admin.save(); // lo guarda en la bdd.
    res.status(200).json({createAdmin: 'OK', message: 'Admin create'});
});

   
    


// Login admin
const login_admin = (async (req,res) => {
    const body = req.body;// Va a recibir todos los datos
    // recupero el usuario por el correo.
    const user= await Admin.findOne({email: body.email});
    // asignno el usuario al token.
    res.status(200).json({token: jwtHelper.createToken(user)});        
});


module.exports={
    registro_admin,
    login_admin
};