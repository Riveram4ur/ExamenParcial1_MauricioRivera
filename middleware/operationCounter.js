let operationCount = 0;  // Contador de operaciones

const operationCounter = (req, res, next) => {
  // Incrementar el contador solo si la solicitud NO es a '/contadores' ni a '/operaciones'
  if (!req.path.includes('/contadores') && !req.path.includes('/operaciones')) {
    operationCount++;  // Incrementa el contador
    console.log(`Operaciones realizadas: ${operationCount}`);  // Log para verificar el contador
  }
  next();  // Llama al siguiente middleware o ruta
};

module.exports = { operationCounter, operationCount };