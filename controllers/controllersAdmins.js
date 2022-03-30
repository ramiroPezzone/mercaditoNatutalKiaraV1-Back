const productosDB = require('../models/productos')
const adminsDB = require('../models/admins')
const categorysDB = require('../models/categorys')
const fs = require('fs')

const controllerAdmins = {
    raiz: async (req, res) => {
        const ad = await adminsDB.find()
        res.send(ad)
    },
    crearAdmin: async (req, res) => {
        const { nameAdmin, pass } = req.body
        await adminsDB.create({
            nameAdmin,
            pass
        })
        res.send('Nuevo administrador creado')
    },
    productos: async (req, res) => {
        const dataProductos = await productosDB.find()
        res.json(dataProductos)
    },
    agregarProducto: async (req, res) => {
        const { name, description, quantity, price, unity, categorys } = req.body
        const image = req.file.filename;
        const categorysAJSON = JSON.parse(categorys)
        await productosDB.create({
            name,
            description,
            quantity,
            price,
            image,
            unity,
            categorys: categorysAJSON
        })
        res.send('Producto agregado')
    },
    editarProducto: async (req, res) => {
        const idProdInd = req.params.id
        const productoIndividual = await productosDB.findById(idProdInd)
        res.json(productoIndividual)
    },
    guardarEdicionProducto: async (req, res) => {
        const idEdition = req.params.id
        const { name, description, quantity, price, unity } = req.body.producto
        await productosDB.findByIdAndUpdate(idEdition, {
            name,
            description,
            quantity,
            price,
            unity,
        })
        res.send('Producto editado satisfactoriamente')
    },
    eliminarUnProducto: async (req, res) => {
        const id = req.params.id
        const productoBorrado = await productosDB.findByIdAndDelete(id)
        fs.unlink('public/imgs/' + productoBorrado.image, () => { })
        res.send('Producto eliminado')
    },
    categorys: async (req, res) => {
        const categorysInDb = await categorysDB.find()
        res.send(categorysInDb)
    },
    agregarCategory: async (req, res) => {
        const { value, label } = req.body
        await categorysDB.create({
            value, label
        })
        res.send('Categoría agregada')
    },
    eliminarCategory: async (req, res) => {
        const idCategory = req.params.id
        await categorysDB.findByIdAndDelete(idCategory)
        res.send('Categoría eliminada')
    }

}

module.exports = controllerAdmins