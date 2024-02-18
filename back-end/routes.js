const express = require('express')
const routes = express.Router()


routes.get('/', (req, res) => {

    //res.sendFile(__dirname + 'public/index.html');

    req.getConnection((err, conn) => {


        if (err) return res.status(500).json({ error: 'Error al ejecutar la consulta' });;
        conn.query('SELECT * FROM usuarios', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })

    //res.send('comprobando conexion');
})
module.exports = routes