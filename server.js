const express = require('express')
const app = express()
const port = 3000


//middelwares
//const checkApiKey = require('./middlewares/auth_api_key')
const error404 = require('./middlewares/error404')
const morgan = require('./middlewares/morgan')

// Logger
app.use(morgan(':method :host :status - :response-time ms :body'));


//rutas
const entriesApiRoutes = require('./routes/entriesAPI_routes')
const authorsApiRoutes = require('./routes/authorsAPI_routes')


app.use(express.json()); // Habilito recepción de JSON en servidor

//Ruta de Template

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/entries',entriesApiRoutes);
app.use('/api/authors',authorsApiRoutes);


//para rutas no existentes
app.use('*',error404)

app.listen(3000, function () {
  console.log(`Example app listening on port http://localhost:${port} !`)
})

//para hacer algo en thunderclient tiene que estar iniciado el server
