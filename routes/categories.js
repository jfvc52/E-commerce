const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const router = express.Router();

router.post('/create',CategoryController.create); // creamos un usuario.. primerro la ruta que puede ser "/" y podemos agregar "/creates"
//  luego en segundo lugar importammos "requiere" la ruta de "Category".
router.put('/id/:id',CategoryController.update); // si ó si debemos poner '/id/:id' 
// para que en POSTMAN tome el nro de ID a corregir...
//  luego en segundo lugar importammos "requiere" la ruta de "Category".
router.delete('/id/:id', CategoryController.delete);

router.get('/id/:id', CategoryController.getById) // obtengo una Categoria por =ID
router.get('/getCategoryByName/:description', CategoryController.getCategoryByName) // obtengo una Categoria por filtro

module.exports = router; 