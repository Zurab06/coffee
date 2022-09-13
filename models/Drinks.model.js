const mongoose = require("mongoose");

const drinksSchema = mongoose.Schema({
  name: String,
  price: Number,
  currentDrink: Boolean,
  volume: Number,
  description: String,
});

const Drink = mongoose.model("Drink", drinksSchema);
module.exports = Drink;
