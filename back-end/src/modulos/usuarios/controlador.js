const based = require('../../DB/mysql');
const bcrypt = require('bcrypt');
const TABLA = 'usuarios';

function findAll() {
    return based.findAll(TABLA);
}

function findById(id) {
    return based.findById(TABLA, id);
}

function add(body) {
    console.log(body);
    return based.add(TABLA, body);
}

function deletet(id) {
    return based.deletet(TABLA, id);
}

function authl(body) {
    return based.auth(TABLA, body);
}




module.exports = {
    findAll,
    findById,
    add,
    deletet,
    authl,
}