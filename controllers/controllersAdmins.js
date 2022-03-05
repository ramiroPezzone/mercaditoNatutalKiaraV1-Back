const productosDB = require('../models/productos')
const adminsDB = require('../models/admins')

const controllerAdmins = {
    raiz: (req, res) => {
        res.send('raiz admins')
    },
    crearAdmin: async(req, res) => {
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
        const image = req.file.filename
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
        const id = req.params._id
        await productosDB.findByIdAndDelete(id)
        res.send('Producto eliminado')
    }
}

module.exports = controllerAdmins