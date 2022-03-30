const express = require('express')
const routes = express.Router()
const go = require('../controllers/controllersAdmins')
const upload = require('../multerConfig')

routes.get('/', go.raiz)
routes.post('/nuevoAdmin', go.crearAdmin)
routes.delete('/:id', go.eliminarAdmin)

// Rutas productos
routes.get('/productos', go.productos)
routes.post('/productos', upload.single('image'), go.agregarProducto)
routes.get('/editar/:id', go.editarProducto)
routes.post('/guardarEdit/:id', go.guardarEdicionProducto)
routes.delete('/productos/:id', go.eliminarUnProducto)

// Rutas categorías
routes.get('/categorys', go.categorys)
routes.post('/categorys', go.agregarCategory)
routes.delete('/categorys/:id', go.eliminarCategory)


module.exports = routes