const mongoose = require('mongoose')

const schemaProductos = mongoose.Schema({
    name: String,
    description: String,
    quantity: Number,
    price: Number,
    image: String,
    unity: String,
    category: String
})

const modeloProductos = mongoose.model('Producto', schemaProductos)

module.exports = modeloProductos