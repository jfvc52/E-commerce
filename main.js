
const express = require('express'); // importo "express"
const app = express(); //?????-?????
const PORT = 3000 // usaremos el puerto 3000

app.use(express.json()); // para que el "req.body" NO sea UNDEFINED.

app.use("/users", require("./routes/users"));  // primerro el prefijo de la ruta que puede ser "/" y podemos agregar "/users"
//  luego en segundo lugar importammos "requiere" la ruta de "users"
app.use("/categories", require("./routes/categories"));  // primero el prefijo de la ruta que puede ser "/" y podemos agregar "/users"
//  luego en segundo lugar importammos "requiere" la ruta de "categories"
app.use("/products", require("./routes/products"));  // primero el prefijo de la ruta que puede ser "/" y podemos agregar "/products"

app.use("/orders", require("./routes/orders"));  // primero el prefijo de la ruta que puede ser "/" y podemos agregar "/products"

//module.exports = MainController;

// esta sentencia siempre al FINAL!!!  salvo que tuviera un  module.export
app.listen(PORT,() => console.log("Servidor levantado en el port "+ PORT)); // para levantar el servidor en automatico al modificar main.js
