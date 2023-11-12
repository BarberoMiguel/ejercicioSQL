const express = require('express');
// Rutas de productos
const entriesApiController = require("../controllers/entriesAPI.controller");
const authorsApiRouter = express.Router();

authorsApiRouter.get('', entriesApiController.getAuthors);
authorsApiRouter.post('', entriesApiController.postAuthor);
authorsApiRouter.put('', entriesApiController.putAuthor);
authorsApiRouter.delete('', entriesApiController.deleteAuthor);

module.exports = authorsApiRouter;

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries
/*
{
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"jabier@thebridgeschool.es",
    "category":"sucesos"
}
    */