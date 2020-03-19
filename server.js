const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();
app.use(express.json()); //Permitir enviar dados a aplicação em JSON
app.use(cors());

//Iniciar Database
mongoose.connect('mongodb://localhost:27017/nodeapi', 
  { useNewUrlParser: true, useUnifiedTopology:true }
);

requireDir('./src/models');


//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);