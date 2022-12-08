
// Variable para inicializar el modelo de cliente en el controlador
const Cliente = require('../models/cliente');
const bcrypt = require('bcrypt');
const jwtHelper = require('../helpers/jwt');

// Funciones cliente
const registro_cliente = (async (req, res)=>{
    const { nombre, apellidos, email, password } = req.body;
    // encrypt password
    const saltRounds = 10;
    const passwordHash= await bcrypt.hash(password, saltRounds);

    const cliente= new Cliente({
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        password: passwordHash
    });
    const savedClient= cliente.save(); // lo guarda en la bdd
    res.status(200).json({createClient: 'OK'});
});

// Login cliente
const login_cliente = (async (req, res) =>{
    const body = req.body;// Va a recibir todos los datos
    // recupero el usuario por el campo correo.
    const user= await Cliente.findOne({email: body.email});
    // asigno el usuario al token.
    return res.json({token: jwtHelper.createToken(user)});    
});



module.exports ={
    registro_cliente,
    login_cliente
};      