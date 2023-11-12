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

const getAuthors = async (req, res) => {
    let author;
    if (req.query.email) {
        author = await entry.getAuthorsByEmail(req.query.email);//esto accede a entries.models y llama a esa funcion allí
        res.status(200).json(author);
    }
    else {
        author = await entry.getAllAuthors();//esto accede a entries.models y llama a esa funcion allí
        res.status(200).json(author);
    }
     // [] con las entries encontradas
}

const postAuthor = async (req, res) => {
    const newAuthor = req.body; // 
    const response = await entry.postAuthor(newAuthor);
    res.status(201).json({message: `usuario creado: ${response.email}`});
}

const putAuthor = async (req, res) => {
    const updatedAuthor = req.body; // {title,content,email,category}
    const response = await entry.updateAuthor(updatedAuthor);//esto accede a entries.models y llama a esa funcion allí
    res.status(200).json({message: `usuario actualizado: ${response.email}`});
}

const deleteAuthor = async (req, res) => {
    const deletedAuthor = req.body; // {title,content,email,category}
    const response = await entry.deleteAuthor(deletedAuthor);//esto accede a entries.models y llama a esa funcion allí
    res.status(200).json({message: `se ha borrado: ${response.email}`});
}

module.exports = {
    getEntries,
    createEntry,
    deleteEntry,
    updateEntry,
    getAuthors,
    postAuthor,
    putAuthor,
    deleteAuthor,
}