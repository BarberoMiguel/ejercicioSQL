const { Pool } = require('pg');

require('dotenv').config()//importa desde el .env

const pool = new Pool({ 
    user: process.env.PG_USER, 
    host: process.env.PG_HOST, 
    database: process.env.PG_DATABASE, 
    password: process.env.PG_PASSWORD 
})
module.exports = pool;

//es lo mismo que en entries.js pero está externalizado. Hay que instalar .env para guardar variables de entorno. todo lo que sean datos sensibles va en el .env y este fichero se incluye en el gitignore. Lo mejor es poner en el .env datos falsos la primera vez por si se sube sin querer.
