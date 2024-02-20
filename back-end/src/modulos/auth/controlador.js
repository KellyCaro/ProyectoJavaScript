const based = require('../../DB/mysql');
const TABLA = 'usuarios';

function findAll() {
    return based.findAll(TABLA);
}

function findById(id) {
    return based.findById(TABLA, id);
}

function add(data) {
    const authData = {
        id: data.id,
    }
    return based.add(TABLA, body);
}

function deletet(id) {
    return based.deletet(TABLA, id);
}

module.exports = {
    findAll,
    findById,
    add,
    deletet
}