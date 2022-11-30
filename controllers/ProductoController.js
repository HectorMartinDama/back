const Product= require('../models/products');
const fs = require('fs-extra'); // permite manegar archivos.
const path= require('path');


// crea un producto en la bdd.
const registro_producto= (async (req, res)=>{
    const { nombre, marca, id} = req.body;
    
    // recupero el nombre de la img.
    const imgPath= req.files.portada.path; // uploads/productos/dpdnk12DXeyVz_TdpW2eiCF_.webp
    // guarda el nombre img en el campo portada.
    const portada= imgPath.split('/')[2]; // dpdnk12DXeyVz_TdpW2eiCF_.webp

    // creo el prducto
    const product= new Product({
        nombre: nombre,
        marca: marca,
        id: id,
        portada: portada
    });
    const saveProduct= product.save();
    res.status(200).json({createProduct: 'OK'});
});


// Devuelve todos los productos.
const all_producto= (async (req, res)=>{
    const products= await Product.find(null, {nombre: 1, marca: 1, id: 1, portada: 1, _id: 1});
    res.status(200).json(products);
});

// devuelve la portada del producto.
const obtener_portada= (async (req, res)=>{
    /* Obtengo la img desde un parametro de la url es decir (/obtenerPortada/81pszDORNtooWlpBFVkH2XDO.jpg -> Nombre de la img) */
    const img= req.params['img'];

    fs.stat('./uploads/productos/'+img, function(err){
        if(!err){
            const path_img= './uploads/productos/'+img;
            // envio la img al frontend
            res.status(200).sendFile(path.resolve(path_img));
        }else{ // si la img no existe, le envio una por defecto.
            res.status(404).sendFile(path.resolve('./uploads/defaultImage.png'));
        }
    });
});


const obtener_producto= (async (req, res)=>{
    // obtengo el (id) desde el parametro de la url es decir (/obtenerProducto/638249bf522c9c1b02807a33).
    const idProducto= req.params['id'];

    // recupero el producto de la bdd con el id del parametro de la peticion.
    const producto= await Product.findById({_id: idProducto}, {nombre: 1, marca: 1, portada: 1, id: 1, _id: 0});
    res.status(200).json(producto); // devuelve el producto encontrado.
});





module.exports = {
    registro_producto,
    all_producto,
    obtener_portada,
    obtener_producto
};