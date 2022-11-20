
const express = require('express');
const app = express();
const cors= require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
// Obtiene los routers
const clienteRouter = require('./routes/cliente');
const adminRouter = require('./routes/admin');

// Constantes.
const PORT= process.env.PORT || 3000;   


// Conexion bbdd 
mongoose.connect(process.env.MONGO_URI).then(() =>{
    console.log('DataBase connect successfully.');
}).catch((err)=>{
    console.log('error connecting MongoDB: ' + err.message);
});

// Puesta en marcha del servidor
app.listen(PORT, ()=>{
    console.log(`Server running on: http://localhost:${PORT}`);
});




// 28 - 34 Se usa porque al estar separado el front y el back en proyectos distintos, cuando se suban a produccion van a estar cada uno en un droplet (VPS - Servidores privados virtuales) diferente
// Back y Front Estan en puertos diferente y se da los permisos para qe se envien la data y no de problemas de cors 

// Las siguientes lineas son los permisos que permiten la conexion comunicacion entre back y front
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/api', clienteRouter); // Asigna los routes a las rutas.
app.use('/api', adminRouter);


module.exports = app;