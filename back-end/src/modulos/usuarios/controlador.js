const based = require('../../DB/mysql');
const TABLA = 'usuarios';

function findAll() {
    return based.findAll(TABLA);
}

module.exports = {
    findAll
}