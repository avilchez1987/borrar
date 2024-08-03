const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http'); // Añade este módulo

require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', require('../routes/user'));

// Exporta la aplicación como una función handler
module.exports.handler = serverless(app);
