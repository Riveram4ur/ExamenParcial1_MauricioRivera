const express = require('express');
const router = express.Router();
const { operationCount } = require('../middleware/operationCounter');  // Asegúrate de importar 'operationCount' correctamente

// Ruta para devolver el número de operaciones realizadas
router.get('/operaciones', (req, res) => {
  res.json({ operaciones: operationCount });  // Devuelve el contador de operaciones
});

module.exports = router;


