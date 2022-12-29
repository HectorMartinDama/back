const Carrito= require('../models/carrito');

const agregar_carrito_cliente= (async (req, res)=>{
    const data= req.body;
    const carrito= await Carrito.create(data);
    res.status(200).json({message: 'Se agrego el producto al carrito.'});
});

module.exports={
    agregar_carrito_cliente
};