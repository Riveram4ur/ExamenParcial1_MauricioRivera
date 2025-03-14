const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  categoria: { type: String, required: true },
});

// Especificamos explícitamente la colección 'productos' en la base de datos
module.exports = mongoose.model('Product', productSchema, 'productos');
