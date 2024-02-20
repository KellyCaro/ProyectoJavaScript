 const express = require('express');
 const app = express()
 const mysql = require('mysql');







 const { appendFile } = require('fs');
 const http = require('http');
 const WebSocket = require('ws');

 const port = 4000;
 const server = http.createServer(express);
 const wss = new WebSocket.Server({ server })

 wss.on('connection', function connection(ws) {
     ws.on('message', function incoming(data) {
         wss.clients.forEach(function each(client) {
             if (client !== ws && client.readyState === WebSocket.OPEN) {
                 client.send(data);
             }
         })
     })
 })

 //  //  server.listen(port, function() {
 //  //      console.log(`Server is listening on ${port}!`)
 //  //  })






 //  //----------------------middleware-------------------
 //  app.use(myconn(mysql, dbOptions, 'single'));


 //  //-------------------------routes-----------------------
 //  // Manejar todas las rutas y servir 'index.html'
 //  app.use('/api', routes)

 //  app.listen(port, () => {
 //      console.log(`la aplicacion esta corriendo en el puesto ${port}`);
 //  })