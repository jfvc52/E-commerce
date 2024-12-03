const express = require('express');
const ProductController = require('../controllers/ProductController')
const router = express.Router();

router.post('/create',ProductController.create); // creamos un usuario.. primerro la ruta que puede ser "/" y podemos agregar "/creates"
//  luego en segundo lugar importammos "requiere" la ruta de "Category".

router.put('/id/:id',ProductController.update); // si ó si debemos poner '/id/:id' 
// para que en POSTMAN tome el nro de ID a corregir...
//  luego en segundo lugar importammos "requiere" la ruta de "Category".

router.delete('/id/:id', ProductController.delete);

router.get('/id/:id', ProductController.getById) // obtengo una Categoria por =ID (tambien puede ser:'/:id' )
router.get('/getAll', ProductController.getAll) // obtengo TODOS los Productos SIN FILTRAR

router.get('/getProductByName/:description', ProductController.getProductByName)
// otra DIFERENTE:  router.get('/title/:title', PostController.getOneByName) (funciona parcido a '/id/:id')
router.get('/getProductByPrice/:price', ProductController.getProductByPrice)
// tambien puedo usar la Funcion: "findOne" muestra la PRIMERA ENTRADA
// que cumple con las condiciones que le pasamos...
router.get('/ProductAllByPriceDesc', ProductController.getProductAllByPriceDesc) // obtengo TODOS los productos filtrados por precios ORDEN DESCENDENTES

module.exports = router; 
