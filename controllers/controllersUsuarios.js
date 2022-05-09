const productosDB = require("../models/productos");

const controllerUsuarios = {
  raiz: (req, res) => {
    res.send("Raíz usuarios");
  },
  productos: async (req, res) => {
    let orderBy = req.params.order;
    const dataProductos = await productosDB.find().sort(`${orderBy}: 1`);
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
