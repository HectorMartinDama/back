const Cupon= require('../models/cupon');



const registro_cupon= (async (req, res)=>{
    const { codigo, tipo, valor, limite } = req.body;
    // creo el cupon
    const cupon= await new Cupon({
        codigo: codigo,
        tipo: tipo,
        valor: valor,
        limite: limite
    });
    const saveCupon= cupon.save();
    res.status(200).json({message: 'Cupon creado con exito.'});
});


const all_cupones= (async (req, res) =>{
    const cupones= await Cupon.find(null, {codigo:1, tipo:1, valor:1, limite:1, _id: 1}).sort([['creado', -1]]);
    res.status(200).json(cupones);
});

const obtener_cupon= (async (req, res)=>{
    try{
        const idCupon= req.params['id'];
        const cupon= await Cupon.findById({_id: idCupon}, {codigo:1, tipo:1, valor:1, limite:1, _id: 0});
        res.status(200).json(cupon);
    }catch(error){
        res.status(422).json({error: error});
    }
});

const actualizar_cupon= (async (req, res)=>{
    const { codigo, tipo, valor, limite } = req.body;
    const idCupon= req.params['id'];
    // creo el cupon
    const cupon= await Cupon.findByIdAndUpdate({_id: idCupon}, {
        codigo: codigo,
        tipo: tipo,
        valor: valor,
        limite: limite
    });
    res.status(200).json({message: 'Cupon actualizado con exito.'});
});

const eliminar_cupon= (async (req, res)=>{
    const idCupon= req.params['id'];
    const cupon= await Cupon.findByIdAndDelete({_id: idCupon});
    res.status(200).json({message: 'Cupon elminado con exito.'});
});





module.exports= {
    registro_cupon,
    all_cupones,
    actualizar_cupon,
    obtener_cupon,
    eliminar_cupon
};