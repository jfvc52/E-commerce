
const express = require('express');
const UserController = require('../controllers/UserController');
const { authentication,isAdmin } = require('../middledwere/authentication');
const router = express.Router();

router.post('/create',UserController.create); // creamos un usuario.. primerro la ruta que puede ser "/" y podemos agregar "/creates"
//  luego en segundo lugar importammos "requiere" la ruta de "users".

router.delete('/id/:id', UserController.delete);
//router.put('/id/:id', UserController.update);

router.get('/getAll', UserController.getAll);

router.get('/',authentication ,UserController.getAll)
router.delete('/id/:id',authentication,UserController.delete)

router.put('/:id',authentication,UserController.update)



router.post('/login',UserController.login);


router.delete('/logout',authentication,UserController.logout)


module.exports = router;