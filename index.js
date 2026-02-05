const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Memoria en RAM
let estudiantes = [];

// Registrar estudiante
app.post('/estudiantes', (req, res) => {
  const { id, nombre, carrera } = req.body;

  if (!id || !nombre || !carrera) {
    return res.status(400).json({ mensaje: 'Datos incompletos' });
  }

  const existe = estudiantes.find(e => e.id === id);
  if (existe) {
    return res.status(409).json({ mensaje: 'ID ya registrado' });
  }

  estudiantes.push({ id, nombre, carrera });
  res.status(201).json({ mensaje: 'Estudiante registrado' });
});

// Listar estudiantes
app.get('/estudiantes', (req, res) => {
  res.status(200).json(estudiantes);
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
