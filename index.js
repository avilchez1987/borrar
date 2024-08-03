const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http'); // Necesario para funciones serverless

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/user')); // Ruta de tus endpoints

// Exporta la aplicación como una función handler para serverless
module.exports.handler = serverless(app); // Exporta como 'handler'