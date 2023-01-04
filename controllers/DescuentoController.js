const Descuento= require('../models/descuento');
const fs = require('fs-extra'); // permite manegar archivos.
const path= require('path');

const registro_descuento= (async (req, res)=>{
    const data= req.body;

    const img_path= req.files.banner.path;
    const name_img= img_path.split('\\')[2];
    data.banner= name_img;

    const descuento= await Descuento.create(data);
    res.status(200).json({message: 'OK'});
});


const listar_descuentos= (async (req, res)=>{
    const filtro= req.params['filtro'];
    const descuentos= await Descuento.find({titulo: new RegExp(filtro, 'i')});
    res.status(200).json(descuentos);
});

// devuelve la portada del producto.
const obtener_portada= (async (req, res)=>{
    /* Obtengo la img desde un parametro de la url es decir (/obtenerPortada/81pszDORNtooWlpBFVkH2XDO.jpg -> Nombre de la img) */
    const img= req.params['img'];

    fs.stat('./uploads/descuentos/'+img, function(err){
        if(!err){
            const path_img= './uploads/descuentos/'+img;
            // envio la img al frontend
            res.status(200).sendFile(path.resolve(path_img));
        }else{ // si la img no existe, le envio una por defecto.
            res.status(404).sendFile(path.resolve('./uploads/defaultImage.png'));
        }
    });
});

module.exports= {
    registro_descuento,
    listar_descuentos,
    obtener_portada
};