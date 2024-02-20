const app = require('./app');
const cors = require('cors');
const { use } = require('./app');

app.use(cors());
app.listen(app.get('port'), () => {
    console.log(`escuchando en el puerto `, app.get("port"))
});