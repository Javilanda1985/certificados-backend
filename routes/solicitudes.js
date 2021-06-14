/*
Path: '/api/solicitudes'
*/
const { Router } = require('express');
const { solicitud } = require('../controllers/solicitudes')

const router = Router();


router.post('/',
    [

    ],
    solicitud
       
    )
module.exports = router;