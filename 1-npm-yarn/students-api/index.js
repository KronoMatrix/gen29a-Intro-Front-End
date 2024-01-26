// codigo para levantar nuestra API en expressJS

// 1. Crear un endpoint GET en express que devuelta una lista estudiantes.
const express = require ('express');
const app = express();
const port = 3000;

// 2. La lista de estudiantes puede ser un arreglo guardado en una variable
const listaEstudiantes = [
    { id: 1, name: 'Erick', age: 38 },
    { id: 2, name: 'Carly', age: 40 },
];

// Endpoint GET para obtener la lista de estudiantes
app.get('/', (req, res) => {
    res.json(listaEstudiantes);
});

// Inicia el servidor

app.listen(port, () => {
    console.log(`Servidor arrancó en el puerto ${port}`);
});