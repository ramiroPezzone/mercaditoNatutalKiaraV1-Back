const mongoose = require('mongoose')

const schemaAdmins = mongoose.Schema({
    nameAdmin: String,
    pass: String
})

const modeloAdmins = mongoose.model('Admin', schemaAdmins)

module.exports = modeloAdmins