let operationCount = 0;

const operationCounter = (req, res, next) => {
  if (!req.path.includes('/contadores') && !req.path.includes('/operaciones')) {
    operationCount++;
    console.log(`Operaciones realizadas: ${operationCount}`);
  }
  next(); 
};

module.exports = { operationCounter, operationCount };