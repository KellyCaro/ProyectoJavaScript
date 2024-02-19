require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 4000,
    },
    db: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '4q0YrfA300M#',
        database: 'streaming'

    }
}