const {User, Order,Post,Token,Sequelize} = require("../models/index.js")
// debemos 1ro IMPORTAR bcryptjs para poder usarlo
const bcryptjs = require("bcryptjs");
const {Op} = Sequelize
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development']

const UserController = {
    
    login(req,res){
        User.findOne({
            where:{
                email:req.body.email
            }
        }).then(user=>{
            if(!user){
                return res.status(400).send({message:"Usuario o contraseña incorrectos"})
            }
            const isMatch = bcryptjs.compareSync(req.body.password, user.password);
            if(!isMatch){
                return res.status(400).send({message:"Usuario o contraseña incorrectos"})
            }
            let token = jwt.sign({ id: user.id }, jwt_secret);
            Token.create({ token, UserId: user.id });
            res.send({ message: 'Bienvenid@ ' + user.name, user, token });
        })
    },
    async create(req, res){
        try {
            // console.log(req.body)
            // encripto la contraseña antes de guardarla en la DB, se vera el "churro" NO la contraseña original
            req.body.password = await bcryptjs.hash(req.body.password,10);

            // creo el usuario normalmente con el método create()
            const user = await User.create(req.body)
            res.status(201).send({message:"User creater successfully",user});
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem",error})
        }
    },
    async delete(req, res) {
        try {
        // primero eleiminaremos las ORDERS emitidas de ese USUARIO.
        await Order.destroy({
            where:{
                UserId: req.params.id
            },
        })
        // segundo eleiminaremos al USER.
        await User.destroy({
            where: {    
                id: req.params.id
            }
        })
        res.send({message: `User whit id ${req.params.id}deleted`})
      } catch (error) {
        console.error(error);
        res.status(500).send({message:"There was a problem",error});
      }
    },
    // Este método devuelve todos los usuarios que estan en la BD
    getAll(req, res) {
        User.findAll({
            })
            .then(user => res.send(user))
    },
    async update(req, res) {
        await User.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            })
        res.send('User updated ok!!');
    },
    async logout(req, res) {
        try {
            await Token.destroy({
                where: {
                    [Op.and]: [
                        { UserId: req.user.id },
                        { token: req.headers.authorization }
                    ]
                }
            });
            res.send({ message: 'Desconectado con éxito' })
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'sorry, disconect not found' })
        }
    }
}

module.exports = UserController;
            /**where: {
                      title: {
                            [Op.like]: `%${req.params.title}%`
                        }
                    include: [User]
            })
            .then(post => res.send(post))   */