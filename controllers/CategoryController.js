const { Category,Sequelize } = require("../models/index.js");
// agrego Sequelize (importo) y  luego creo variable {Op}
const {Op} = Sequelize;
const CategoryController = {
    async create(req, res) {
        try {
            const category = await Category.create(req.body)
            res.status(201).send({ message: "Category creater successfully", category });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem", error })
        }
    },

    async update(req, res) {
        await Category.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            })
        res.send('Categoria actualizada con éxito');
    },

    async delete(req, res) {
        await Category.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send(
            'La Category was drop OK!!!'
        )
    },

    getById(req, res) {
        Category.findByPk(req.params.id)
            //include: [User]  para traer tambien el Usuario en publicaciones
            .then(post => res.send(post))
    },
    async getCategoryByName(req, res) {
        try {
            const category = await Category.findAll({
                where: {
                    description: {
                        [Op.like]: `%${req.params.description}%`
                    }
                }
            })
            res.send(category)
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Ha habido un error", error });
        }
    },
}

module.exports = CategoryController;