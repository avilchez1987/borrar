const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Define las rutas para tu API
app.use('/api', require('../routes/user'));

// Exporta una función que maneje las solicitudes HTTP
module.exports = (req, res) => {
  // Maneja la solicitud con Express
  app(req, res);
};