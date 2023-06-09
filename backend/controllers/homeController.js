const Menu = require('../models/menu');

exports.home = async (req, res) => {
    const pizzas = await Menu.find();
    
    return res.json({
        data: pizzas
    })
};
  