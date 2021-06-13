require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require ('./database/config');

//Servidor express
const app = express();

//Configurar CORS
app.use(cors());
 
//DB
dbConnection();


//Rutas
app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg:'Hola Mundo'
    });

});


app.listen(3000, () => {
    console.log('Corriendo en el puerto ' + process.env.PORT);
});

