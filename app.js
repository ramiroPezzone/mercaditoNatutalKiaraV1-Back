require('dotenv').config()
const cors = require('cors')
const path = require('path')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cloudinary = require('cloudinary')
const URI = process.env.URI
let port = process.env.PORT
if (port == null || port == "") { port = 8080 }

const rutasAdmins = require('./routes/rutasAdmins.js')
const rutasUsuarios = require('./routes/rutasUsuarios')

// Configuración de Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
// 

// Iniciando cors
app.use(cors())

// Conectando con DB
const dbConnection = () => {
    mongoose.connect((URI), {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Conectado a la Base de Datos');
}
dbConnection()

// Iniciando server
app.listen(port, () => { console.log(`Servidor en línea en el puerto ${port}`) })

// Usando Json
app.use(express.json())

// Carpeta pública
app.use(express.static(path.join(__dirname, 'public')))

// Rutas
app.get('/', (req, res) => {
    res.send('API Mercadito Natural Kiara')
})

// Rutas admins
app.use('/admins', rutasAdmins)

// Rutas usuarios
app.use('/usuarios', rutasUsuarios)