const express = require("express");
const routes = express.Router();
const go = require("../controllers/controllersUsuarios");

routes.get("/", go.raiz);

routes.get("/productos", go.productos);

routes.get("/productos/:cat", go.categorys);

module.exports = routes;
