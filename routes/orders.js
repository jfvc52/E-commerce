const express = require('express');
const OrderController = require('../controllers/OrderController')
const router = express.Router();

router.post('/create',OrderController.create); // creamos un usuario.. primerro la ruta que puede ser "/" y podemos agregar "/creates"
//  luego en segundo lugar importammos "requiere" la ruta de "Category".

//router.put('/id/:id',OrderController.update); // si ó si debemos poner '/id/:id' 
// para que en POSTMAN tome el nro de ID a corregir...
//  luego en segundo lugar importammos "requiere" la ruta de "Category".

router.delete('/id/:id', OrderController.delete);

router.get('/id/:id', OrderController.getByPk) // obtengo por =ID  veo la DATA y el UserId del USUARIO (tambien puede ser:'/')

//router.get('/',OrderController.getOrderAll)


//router.get('/', OrderController.getOrderAll) // obtengo por =ID  veo la DATA y el UserId del USUARIO (tambien puede ser:'/')

//router.get('/date/:date', OrderController.getOrderByDate) // obtengo por DATE el UserId 

//router.get('/getProductAll', OrderController.getProductAll) // obtengo una Categoria por filtro (para CREATE ó GETALL tambien puede ser:'/' )

// router.get('/getProductByName/:description', OrderController.getProductByName)
// // otra DIFERENTE:  router.get('/title/:title', PostController.getOneByName) (funciona parcido a '/id/:id')
// router.get('/getProductByPrice/:price', OrderController.getProductByPrice)
// tambien puedo usa la Funcion: "findOne" muestra la PRIMERA ENTRADA
// que cumple con las condiciones que le pasamos...


module.exports = router; 
