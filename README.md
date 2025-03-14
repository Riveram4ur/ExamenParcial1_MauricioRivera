# Backend Tecnologias Web II

Proyecto de Examen Parcial backend desarrollado con Node.js, Express.js y MongoDB para gestionar las colecciones `Usuarios` y `Productos`.

## Requisitos
- Node.js (v16 o superior)
- MongoDB (instalado y corriendo localmente en `mongodb://localhost:27017`)

## Instalación
1. Clona este repositorio: "https://github.com/Riveram4ur/ExamenParcial1_MauricioRivera/tree/master".
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Asegúrate de que MongoDB esté corriendo en tu máquina.
5. Importa los datos iniciales a la base de datos `sample`:
   - `mongoimport --db sample --collection usuarios --file sample.usuarios.json --jsonArray`
   - `mongoimport --db sample --collection productos --file sample.productos.json --jsonArray`

## Ejecución
1. Ejecuta `npm start` para iniciar el servidor.
2. El servidor estará disponible en `http://localhost:3000`.

## Endpoints
- **Usuarios**
  - `POST /usuarios` - Crear usuario
  - `GET /usuarios` - Listar usuarios
  - `PUT /usuarios/:id` - Actualizar usuario
  - `DELETE /usuarios/:id` - Eliminar usuario
- **Productos**
  - `POST /productos` - Crear producto
  - `GET /productos` - Listar productos
  - `PUT /productos/:id` - Actualizar producto
  - `DELETE /productos/:id` - Eliminar producto
- **Contadores**
  - `GET /contadores` - Número de registros en cada colección
  - `GET /operaciones` - Total de operaciones realizadas

## Pruebas
Usa Postman o Insomnia para probar los endpoints.

## Developed by Mauricio Rivera Mayan