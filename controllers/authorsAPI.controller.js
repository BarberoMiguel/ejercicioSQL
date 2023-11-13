const authors = require('../models/authors.model'); // Importar el modelo de la BBDD


const getAuthors = async (req, res) => {
    let author;
    if (req.query.email) {
        author = await authors.getAuthorsByEmail(req.query.email);//esto accede a entries.models y llama a esa funcion allí
        res.status(200).json(author);
    }
    else {
        author = await authors.getAllAuthors();//esto accede a entries.models y llama a esa funcion allí
        res.status(200).json(author);
    }
     // [] con las entries encontradas
}

const postAuthor = async (req, res) => {
    const newAuthor = req.body; // 
    const response = await authors.postAuthor(newAuthor);
    res.status(201).json({message: `usuario creado: ${response.email}`});
}

const putAuthor = async (req, res) => {
    const updatedAuthor = req.body; // {title,content,email,category}
    const response = await authors.updateAuthor(updatedAuthor);//esto accede a entries.models y llama a esa funcion allí
    res.status(200).json({message: `usuario actualizado: ${response.email}`});
}

const deleteAuthor = async (req, res) => {
    const deletedAuthor = req.body; // {title,content,email,category}
    const response = await authors.deleteAuthor(deletedAuthor);//esto accede a entries.models y llama a esa funcion allí
    if (response.message) {
        res.status(200).json(response);   
    } else {
        res.status(200).json({message: `se ha borrado: ${response.email}`});
    }
}

module.exports = {
    getAuthors,
    postAuthor,
    putAuthor,
    deleteAuthor,
}