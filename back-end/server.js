//  const express = require('express');
//  const app = express()
//  const mysql = require('mysql');
//  const myconn = require('express-myconnection');
//  const routes = require('./routes');
//  const dbOptions = {
//      host: 'localhost',
//      port: 3306,
//      user: 'root',
//      password: '4q0YrfA300M#',
//      database: 'streaming'

//  }

//  const connection = mysql.createConnection(dbOptions);

//  // Intentar conectar a la base de datos
//  connection.connect((err) => {
//      if (err) {
//          console.error('Error al conectar a la base de datos:', err);
//          return;
//      }
//      console.log('Conexión exitosa a la base de datos!');

//      // Ahora puedes realizar consultas SQL u otras operaciones con la base de datos
//  });



//  // const { appendFile } = require('fs');
//  // const http = require('http');
//  // const WebSocket = require('ws');

//  const port = 6969;
//  //const server = http.createServer(express);
//  // const wss = new WebSocket.Server({ server })

//  // wss.on('connection', function connection(ws) {
//  //     ws.on('message', function incoming(data) {
//  //         wss.clients.forEach(function each(client) {
//  //             if (client !== ws && client.readyState === WebSocket.OPEN) {
//  //                 client.send(data);
//  //             }
//  //         })
//  //     })
//  // })

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