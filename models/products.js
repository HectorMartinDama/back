// imports de mongoose
const mongoose= require('mongoose');
const Schema = mongoose.Schema;

// esquema para la coleccion (cliente)
const ProductSchema= Schema({
    nombre: {
        type: String,
        required: true // campo obligatorio
    },
    marca: {
        type: String,
        required: true
    },
    portada: {
        type: Object,
        required: true
    },
    galeria: [ // Imagenes del producto
        {
            type: Object
        }
    ],
    precio: {
        type: Number,
        required: false
    },
    stock: {
        type: Number,
        required: false
    },
    nventas: {
        type: Number,
        default: 0,
        required: false
    },
    nestrellas: { // Estrellas de producto.
        type: Number,
        default: 0,
        required: true
    },
    categoria: {
        type: String,
        required: false
    },
    estado: {
        type: String,
        default: 'Almacen', // Es decir no esta en tienda. | Valores (Almacen y Tienda)
        required: true
    },
    creado: {
        type: Date,
        default: Date.now, // Fecha y hora en la que se ha añadido el producto.
        required: true
    },
    id: { // Numero que indentifica el producto.
        type: String,
        required: true
    }
});


// exporta el Schema
module.exports = mongoose.model('producto', ProductSchema);