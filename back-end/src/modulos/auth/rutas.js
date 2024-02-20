const express = require('express');
const router = express.Router();
const respuesta = require('../../red/respuestas');
const controlador = require('./controlador');

router.use(express.json());
router.get('/', fAll);
router.get('/:id', fById);
router.delete('/:id', dById);
router.post('/', add);


async function fAll(req, res) {
    //res.send('La conexión funciona');

    const items = await controlador.findAll('');
    respuesta.success(req, res, items, 200);

};

async function fById(req, res) {
    //res.send('La conexión funciona');
    try {
        const items = await controlador.findById(req.params.id);
        respuesta.success(req, res, items, 200);

    } catch {
        respuesta.error(req, res);

    }


};
async function dById(req, res) {
    //res.send('La conexión funciona');
    try {
        const items = await controlador.deletet(req.params.id);
        respuesta.success(req, res, 'item eliminado correctamente', 200);

    } catch (error) {
        console.error('Error al eliminar el elemento por ID:', error);
        respuesta.error(req, res);

    }


};


async function add(req, res) {

    console.log("rutas: " + req.body);
    console.dir(req.body);



    try {
        const items = await controlador.add(req.body);
        respuesta.success(req, res, 'item guardado correctamente', 200);

    } catch (error) {
        console.error('Error al momento de guardar', error);
        respuesta.error(req, res);

    }


};
module.exports = router;