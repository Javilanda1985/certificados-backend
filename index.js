require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require ('./database/config');

//Servidor express
const app = express();

//Configurar CORS
app.use(cors());

//Lectura del body
app.use(express.json());
 
//DB
dbConnection();


//Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));
app.use('/api/solicitudes', require('./routes/solicitudes'));


app.listen(3000, () => {
    console.log('Corriendo en el puerto ' + process.env.PORT);
});

