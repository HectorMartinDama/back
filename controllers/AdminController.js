
// Variable para inicializar el modelo de admin en el controlador
const Admin = require('../models/admin');
const Client= require('../models/cliente');
const bcrypt = require('bcrypt');
const jwtHelper = require('../helpers/jwt');

// crea un admin
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
    res.status(200).json({createAdmin: 'OK'});
});

   

// Login admin
const login_admin = (async (req,res) => {
    const body = req.body;// Va a recibir todos los datos
    // recupero el usuario por el correo.
    const user= await Admin.findOne({email: body.email});
    // asignno el usuario al token.
    res.status(200).json({token: jwtHelper.createToken(user)});        
});


// Devuelve todos los clientes. 1: devuelve, 0: no devuelve.
const allClients_admin = (async (req, res)=>{
    const clients= await Client.find(null, {nombre: 1, apellidos: 1, pais: 1, telefono: 1, _id: 0});
    res.status(200).json(clients);
});



module.exports={
    registro_admin,
    login_admin,
    allClients_admin
};