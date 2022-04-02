const mongoose = require('mongoose')

const schemaProductos = mongoose.Schema({
    name: String,
    description: String,
    quantity: Number,
    price: Number,
    image: String,
    public_id: String,
    unity: String,
    categorys: Array
})

const modeloProductos = mongoose.model('Producto', schemaProductos)

module.exports = modeloProductos