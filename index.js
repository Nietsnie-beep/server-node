// Importar los módulos necesarios
const express = require('express');
const app = express();
const port = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Ruta principal que devuelve un mensaje de bienvenida
app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor Express!');
});

// Ruta para manejar un POST request
app.post('/data', (req, res) => {
  const receivedData = req.body;
  res.json({
    message: 'Datos recibidos correctamente',
    data: receivedData
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
