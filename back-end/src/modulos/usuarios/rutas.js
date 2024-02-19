const express = require('express');
const router = express.Router();
const respuesta = require('../../red/respuestas');
const controlador = require('./controlador');




router.get('/', (req, res) => {
    //res.send('La conexión funciona');

    const todos = controlador.findAll('').then((items) => {
        respuesta.success(req, res, items, 200);
    });
});

module.exports = router;