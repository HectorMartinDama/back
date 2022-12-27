const Marca= require('../models/marca');


const registro_marca= (async (req, res)=>{
    const nombre= req.body.nombre;
    // creo la marca
    const marca= new Marca({
        nombre: nombre
    });
    const saveMarca= marca.save();
    res.status(200).json({message: 'Marca creada con exito.'});
});

const all_marcas= (async (req, res)=>{
    const marcas= await Marca.find(null, {nombre: 1, _id: 1}).sort([['creado', -1]]);
    res.status(200).json(marcas);
});

const eliminar_marca= (async (req, res)=>{
    const idMarca= req.params['id'];
    const marca= await Marca.findByIdAndDelete({_id: idMarca});
    res.status(200).json({message: 'Marca eliminada con exito.'});
});



module.exports={
    registro_marca,
    all_marcas,
    eliminar_marca
};