const Drink = require("../models/Drinks.model");

module.exports.DrinksController = {
  getDrinks: async (req, res) => {
    try {
      const drinks = await Drink.find({});
      res.json(drinks);
    } catch (error) {
      res.json(error.message);
    }
  },
  //   getDrinks2: async (req, res) => {
  //     try {

  //     } catch (error) {
  //         res.json(error.message)
  //     }
  //   },

  getDrinksStock: async (req, res) => {
    try {
      const drinks = await Drink.find({ currentDrink: true });
      res.json(drinks);
    } catch (error) {
      res.json(error.message);
    }
  },

  getDrinksById: async (req, res) => {
    try {
      const drinks = await Drink.findById(req.params.id);
      res.json(drinks);
    } catch (error) {
      res.json(error.message);
    }
  },

  postDrinks: async (req, res) => {
    try {
      const { name, price, currentDrink, volume, desription } = req.body;
      const drink = await Drink.create({
        name,
        price,
        currentDrink,
        volume,
        desription,
      });
      res.json(drink);
    } catch (error) {
      res.json(error.message);
    }
  },

  deleteDrinks: async (req, res) => {
    try {
      await Drink.findByIdAndDelete(req.params.id);
      res.json("drinks deleted");
    } catch (error) {
      res.json(error.message);
    }
  },

  changeDrinks: async (req, res) => {
    const { name, price, currentDrink, volume } = req.body;
    try {
      await Drink.findByIdAndUpdate(req.params.id, {
        name,
        price,
        currentDrink,
        volume,
      });
      res.json("drink updated");
    } catch (error) {
      res.json(error.message);
    }
  },
};
