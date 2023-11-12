//http://localhost:3000/products?API_KEY=123abc

const checkApiKey = function (req, res, next) {
    // Comprobar si existe API KEY en BBDD pasada por cliente
    // ...
    if (req.query.API_KEY === "123abc") {
        next(); // Pasa a la siguiente tarea
    } else {
        //Mando mensaje de error
        res.status(401).send("Error. API KEY no proveída");
    }
}

module.exports = checkApiKey;

//el next es un método que cuando se está ejecutando hace que se pase a la siguiente tarea. Si pasa una apikey correcta, hace que pase al siguiente paso. 

//la api key no está hecha para que todos los usuarios tengan la misma