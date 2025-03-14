const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const counterRoutes = require('./routes/counters');
const { operationCounter } = require('./middleware/operationCounter');  // Asegúrate de importar el middleware correctamente

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Aplica el middleware operationCounter a todas las rutas excepto '/contadores' y '/operaciones'
app.use((req, res, next) => {
  if (!req.path.includes('/contadores') && !req.path.includes('/operaciones')) {
    operationCounter(req, res, next);  // Aplica el middleware solo si no es '/contadores' ni '/operaciones'
  } else {
    next();  // Llama al siguiente middleware si es '/contadores' o '/operaciones'
  }
});

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/sample', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error de conexión:', err));

// Rutas
app.use('/usuarios', userRoutes);
app.use('/productos', productRoutes);
app.use('/contadores', counterRoutes);  // Ruta para /contadores
app.use('/operaciones', counterRoutes);  // Ruta para /operaciones

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});