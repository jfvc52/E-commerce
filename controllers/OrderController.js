const {Order,Sequelize} = require("../models/index.js");
const { get } = require("../routes/orders.js");
// agrego Sequelize (importo) y  luego creo variable {Op}
const {Op} = Sequelize;
const OrderController = {
    async create(req, res) {
        try {
            const order = await Order.create(req.body)
            res.status(201).send({ message: "Order created successfully", order });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem", error })
        }
    },

    /* async getAll(req, res) {
        await Order.date(req.body,
            {
                where: {
                    id: req.params.date
                }
            })
        res.send('The Order modificated is OK!!');
    }, */
    async delete(req, res) {
        await Order.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send(
            'The Order was drop OK!!!'
        )
    },
    getByPk(req, res) {
        Order.findByPk(req.params.id)
            //include: [User]  para traer tambien el Usuario en publicaciones
            .then(post => res.send(post))
    },
    
    
    /* async getOrderAll(req, res) {
        try {
            const order = await Order.findAll({
                //where: {
                    //data: {
                       // [Op.like]: `%${req.params.description}%`
                    //}
            })
            res.send(order)
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Ha habido un error", error });
        }
    }, */    


    /**     NO  FUNCIONA!!!!  //
    async getOrderByDate(req, res) {
        try {
            const order = await Order.findAll({
                where: {
                    data: {
                        [Op.like]: `%${req.params.date}%`
                    }
                }
            })
            res.send(order)
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "System error", error });
        }
    },  */
}

module.exports = OrderController;