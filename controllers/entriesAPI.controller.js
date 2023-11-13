const entry = require('../models/entries.model'); // Importar el modelo de la BBDD

//getEntries
// if(hay email)
//     busca por mail
// else
//     busca todo


// GET http://localhost:3000/entries --> ALL
// GET http://localhost:3000/entries?email=hola@gmail.com --> por email
//lo vamos a engachar a una ruta que si hay mail busca por correo, si no hay mail busca todo. 
const getEntries = async (req, res) => {
    let entries;
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);//esto accede a entries.models y llama a esa funcion allí
       
    }
    else {
        entries = await entry.getAllEntries();//esto accede a entries.models y llama a esa funcion allí
    }
    res.status(200).json(entries); // [] con las entries encontradas
}

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear entry por email
const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
    const response = await entry.createEntry(newEntry);//esto accede a entries.models y llama a esa funcion allí
    res.status(201).json({
        "items_created": response,
        data: newEntry
    });
}

const updateEntry = async (req, res) => {
    const updatedEntry = req.body; // {title,content,email,category}
    const response = await entry.updateEntry(updatedEntry);//esto accede a entries.models y llama a esa funcion allí
    res.status(200).json({
        "items_updated": response,
        data: updatedEntry
    });
}

const deleteEntry = async (req, res) => {
    const title = req.body.title; // {title}
    const response = await entry.updateEntry(title);//esto accede a entries.models y llama a esa funcion allí
    res.status(200).json({
        message: `Se ha borrado la entry '${title}' `
    });
}


module.exports = {
    getEntries,
    createEntry,
    deleteEntry,
    updateEntry,
}