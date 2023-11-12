const express = require('express');
// Rutas de productos
const entriesApiController = require("../controllers/entriesAPI.controller");
const entriesApiRouter = express.Router();

entriesApiRouter.get('/', entriesApiController.getEntries);
entriesApiRouter.put('/', entriesApiController.updateEntry);
entriesApiRouter.delete('/', entriesApiController.deleteEntry);
entriesApiRouter.post('/', entriesApiController.createEntry);

module.exports = entriesApiRouter;

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