const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const counterRoutes = require('./routes/counters');
const { operationCounter } = require('./middleware/operationCounter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
  if (!req.path.includes('/contadores') && !req.path.includes('/operaciones')) {
    operationCounter(req, res, next);
  } else {
    next();
  }
});

mongoose.connect('mongodb://localhost:27017/sample', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error de conexión:', err));

// Rutas
app.use('/usuarios', userRoutes);
app.use('/productos', productRoutes);
app.use('/contadores', counterRoutes); 
app.use('/operaciones', counterRoutes); 

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});