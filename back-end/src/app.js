const express = require('express');
const config = require('./config');
const app = express();
app.set('port', config.app.port);


const usuarios = require('./modulos/usuarios/rutas');

//configuración
module.exports = app;
//rutas
app.use('/api/usuarios', usuarios);


// const mysql = require('mysql');
// const myconn = require('express-myconnection');
// const routes = require('./routes');
// const dbOptions = {
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '4q0YrfA300M#',
//     database: 'streaming'

// }