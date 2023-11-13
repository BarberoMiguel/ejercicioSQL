const authorQueries = {
    getAllAuthors: `SELECT * FROM authors;`,
    getAuthorsByEmail: `SELECT * FROM authors WHERE email=$1;`,
    postAuthor: `INSERT INTO authors(name,surname,email,image) 
    VALUES ($1,$2,$3,$4);`,
    updateAuthor: `UPDATE authors
    SET name =$1, surname =$2, image =$4
    WHERE email =$3`,
    deleteAuthor: `DELETE FROM authors WHERE email =$1`,
}
module.exports = authorQueries;