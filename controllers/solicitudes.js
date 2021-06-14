const { response } = require('express');


const solicitud = async(req, res = response) => {

    try {
        


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


}


module.exports = {
    solicitud
}