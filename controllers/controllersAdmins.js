const productosDB = require('../models/productos')
const adminsDB = require('../models/admins')
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
        const { name, description, quantity, price, unity, category } = req.body
        const image = req.file.filename;
        await productosDB.create({
            name,
            description,
            quantity,
            price,
            image,
            unity,
            category
        })
        res.send('Producto agregado')
    },
    eliminarUnProducto: async (req, res) => {
        const id = req.params.id
        const productoBorrado = await productosDB.findByIdAndDelete(id)
        fs.unlink('public/imgs/' + productoBorrado.image, () => { })
        res.send('Producto eliminado')
    }
}

module.exports = controllerAdmins