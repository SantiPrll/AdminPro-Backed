// Requires: Importación de Librerias
var express = require("express");
var mongoose = require("mongoose");

// Inicializar variables
var app = express();

// Conexion a la base de datos
mongoose.connection.openUri("mongodb://localhost:27017/hospitalDB", (error, response) => {
  if(error) throw error;

  console.log("Data Base: \x1b[32m%s\x1b[0m", "online");
});

// Rutas
app.get("/", (request, response, next) => {
  response.status(200).json({
    ok: true,
    message: "Peticion realizada"
  });
});

// Eschuchar peticiones
app.listen(3000, () => {
  console.log("Express server port 3000: \x1b[32m%s\x1b[0m", "online");
});
