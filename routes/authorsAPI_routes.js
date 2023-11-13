const express = require('express');
// Rutas de productos
const authorsApiController = require("../controllers/authorsAPI.controller");
const authorsApiRouter = express.Router();

authorsApiRouter.get('', authorsApiController.getAuthors);
authorsApiRouter.post('', authorsApiController.postAuthor);
authorsApiRouter.put('', authorsApiController.putAuthor);
authorsApiRouter.delete('', authorsApiController.deleteAuthor);

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