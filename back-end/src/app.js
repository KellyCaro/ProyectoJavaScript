const express = require('express');
const config = require('./config');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.set('port', config.app.port);


const usuarios = require('./modulos/usuarios/rutas');

//configuración
module.exports = app;
//rutas
app.use('/api/usuarios', usuarios);

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));

//-------Multichat---------
// const { appendFile } = require('fs');
// const http = require('http');
// const WebSocket = require('ws');

// const port = 6969;
// const server = http.createServer(express);
// const wss = new WebSocket.Server({ server })

// wss.on('connection', function connection(ws) {
//     ws.on('message', function incoming(data) {
//         wss.clients.forEach(function each(client) {
//             if (client !== ws && client.readyState === WebSocket.OPEN) {
//                 client.send(data);
//             }
//         });
//     });
// })