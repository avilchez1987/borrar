const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Define tus rutas API
app.use('/api', require('./routes/user'));

// Exporta la función handler para Vercel
module.exports = serverless(app);