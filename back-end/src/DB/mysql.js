const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
}

const connection = mysql.createConnection(dbconfig);
// Intentar conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos!');

    // Ahora puedes realizar consultas SQL u otras operaciones con la base de datos
});

function findAll(table) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);

        })
    });
}

function findById(table, id) {}

function add(table, data) {}

function deletet(id) {}

module.exports = {
    findAll,
    findById,
    add,
    deletet
}