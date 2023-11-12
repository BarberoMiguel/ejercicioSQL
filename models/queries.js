const queries = {
    getEntriesByEmail: `
    SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.email=$1 
    ORDER BY e.title;`,
    getAllEntries: `SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author 
    ORDER BY e.title;`,
    createEntry: `INSERT INTO entries(title,content,id_author,category) 
    VALUES ($1,$2,
    (SELECT id_author FROM authors WHERE email=$3),$4)`,
    updateEntry: `DELETE FROM entries WHERE title =$1;
    INSERT INTO entries(title,content,id_author,category) 
    VALUES ($1,$2,
    (SELECT id_author FROM authors WHERE email=$3),$4)`,
    deleteEntry: `DELETE FROM entries WHERE title =$1`,
    getAllAuthors: `SELECT * FROM authors;`,
    getAuthorsByEmail: `SELECT * FROM authors WHERE email=$1;`,
    postAuthor: `INSERT INTO authors(name,surname,email,image) 
    VALUES ($1,$2,$3,$4);`,
    updateAuthor: `UPDATE authors
    SET name =$1, surname =$2, image =$4
    WHERE email =$3`,
    deleteAuthor: `DELETE FROM authors WHERE email =$1`,
}
module.exports = queries;

// el $ es un hueco, es un parámetro