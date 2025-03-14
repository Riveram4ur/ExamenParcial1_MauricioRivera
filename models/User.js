const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  ocupacion: { type: String, required: true },
});

// Especificamos explícitamente la colección 'usuarios' en la base de datos
module.exports = mongoose.model('User', userSchema, 'usuarios');
