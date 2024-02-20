const mysql = require('mysql');
const config = require('../config');
const bcrypt = require('bcrypt');

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

function findById(table, id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE idusuarios=${id}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);

        })
    });
}

// function add(table, data) {
//     return new Promise((resolve, reject) => {
//         connection.query(`INSERT INTO ${table} SET ?`, data, (error, result) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// }


async function add(table, data) {

    console.log(data);
    delete data.idusuarios;
    //Extraer la contraseña de los datos
    const password = data.password;

    // Generar un hash de la contraseña usando bcrypt
    const hashedPassword = await bcrypt.hash(password, 2);

    // Reemplazar la contraseña en los datos con su hash
    data.password = hashedPassword;
    const keys = Object.keys(data);
    console.log('esss qui');

    const values = Object.values(data);


    const columnNames = keys.join(', ');
    const valuePlaceholders = values.map(() => '?').join(', ');


    const sqlQuery = `INSERT INTO ${table} (${columnNames}) VALUES (${valuePlaceholders})`;


    return new Promise((resolve, reject) => {
        connection.query(sqlQuery, values, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

function deletet(table, id) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM ${table} WHERE idusuarios=${id}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);

        });
    });
}


async function auth(tabla, data) {

    const registro = false;
    try {
        const resultado = await findById(tabla, data.idusuarios);

        if (resultado) {
            const contrasenaCoincide = await bcrypt.compare(data.password, resultado.password);

            if (contrasenaCoincide && resultado.usuario === data.usuario) {
                registro = treu;

            }

        }
        return registro;





    } catch (error) {

        return false;
    }
}


module.exports = {
    findAll,
    findById,
    add,
    deletet,
    auth
}