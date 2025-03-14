const express = require('express');
const router = express.Router();
const { operationCount } = require('../middleware/operationCounter');

router.get('/operaciones', (req, res) => {
  res.json({ operaciones: operationCount });
});

module.exports = router;
