const express = require('express')
const routes = express.Router()
const go = require('../controllers/controllersUsuarios')

routes.get('/', go.raiz)

routes.get('/productos', go.productos)

module.exports = routes