const express = require('express')
const routes = express.Router()
const go = require('../controllers/controllersAdmins')
const upload = require('../multerConfig')

routes.get('/', go.raiz)
routes.post('/nuevoAdmin', go.crearAdmin)

routes.get('/productos', go.productos)
routes.post('/productos', upload.single('image'), go.agregarProducto)

routes.delete('/productos/:id', go.eliminarUnProducto)

module.exports = routes