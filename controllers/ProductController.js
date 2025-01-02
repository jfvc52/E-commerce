const {Product,Sequelize} = require("../models/index.js")
// agrego Sequelize (importo) y  luego creo variable {Op}
const {Op} = Sequelize;
const ProductController = {
    async create(req, res){
        try {
            const product = await Product.create(req.body)
            res.status(201).send({message:"User creater successfully",product});
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem",error})
        }
    },   
    async update(req, res) {
        await Product.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            })
        res.send('Producto actualizado con éxito');
    },

    async delete(req, res) {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send(
            'The Product was drop OK!!!'
        )
    },
    getProductById(req, res) {
        Product.findByPk(req.params.id)
            //include: [User]  para traer tambien el Usuario en publicaciones
            .then(post => res.send(post))
    },
    async getProductByName(req, res) {
        try {
            const product = await Product.findAll({
                where: {
                    description: {
                        [Op.like]: `%${req.params.description}%`
                    }
                }
            })
            res.send(product)
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Ha habido un error", error });
        }
    },
    /**  puede buscar uunapalabra completa, una letra o varias... El buscador NO es sencible a mayusculas
     * hacemos un "endpoint especial, que busca por parametro de Titles/description
     * async getProductByName(req, res) {
        try {
            const product = await Product.findAll({ "busca TODO"
                where: { "donde??"
                    description: {
                        [Op.like]: `%${req.params.description}%` se pasa parametro para que busque lo indicado...
                    }
                }
            })
            res.send(product)
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Ha habido un error", error });
        }
     */

    async getAll(req, res) {
        try {
            const products = await Product.findAll()
            res.send(products)
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Ha habido un error", error });
        }
    },

    async getProductByPrice(req, res) {
        try {
            const product = await Product.findAll({
                where: {
                    price: {
                        [Op.like]: `%${req.params.price}%`
                    }
                }
            })
            res.send(product)
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Ha habido un error", error });
        }
    },

    //app.get('/productos', async (req, res) => {
    async getProductAllByPriceDesc(req, res) {
        try {
            // Recupera y ordena los productos por precio en orden descendente
            const product = await Product.findAll({
                order: [['price', 'DESC']], // Ordena por precio descendente
            
            });
            res.status(200).json(product);
        } catch (error) {
            console.error('Error al obtener productos:', error);
            res.status(500).json({ error: 'Error al obtener los productos' });
        }
    },

}

module.exports = ProductController;