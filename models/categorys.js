const mongoose = require('mongoose')

const schemaCategorys = mongoose.Schema({
    value: String,
    label: String,
})

const modeloCategory = mongoose.model('Category', schemaCategorys)

module.exports = modeloCategory