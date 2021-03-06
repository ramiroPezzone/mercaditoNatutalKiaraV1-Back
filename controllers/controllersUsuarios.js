const productosDB = require("../models/productos");

const controllerUsuarios = {
  raiz: (req, res) => {
    res.send("Raíz usuarios");
  },
  productos: async (req, res) => {
    const dataProductos = await productosDB.find().sort("name");
    res.json(dataProductos);
  },
  ofertas: async (req, res) => {
    const dataProductos = await productosDB.find({ oferta: "si" }).sort("name");
    res.json(dataProductos);
  },
  categorys: async (req, res) => {
    const param = req.params.cat;
    const categoryRes = await productosDB.find({
      "categorys.value": { $all: [`${param}`] },
    });
    res.json(categoryRes);
  },
};

module.exports = controllerUsuarios;
