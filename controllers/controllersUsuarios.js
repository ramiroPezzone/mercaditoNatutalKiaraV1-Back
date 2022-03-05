const productosDB = require('../models/productos')

const controllerUsuarios = {
    raiz: (req, res) => {
        res.send('Raíz usuarios')
    },
    productos: async (req, res) => {
        const dataProductos = await productosDB.find()
        res.json(dataProductos)
    }
}

module.exports = controllerUsuarios