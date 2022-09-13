const { Router } = require("express");
const { DrinksController } = require("../controllers/drinks.controller");

const router = Router();

router.get("/drinks", DrinksController.getDrinks);
router.get("drinks/in-stock", DrinksController.getDrinksStock);
router.get("drinks/:id", DrinksController.getDrinksById);
router.post("/drinks", DrinksController.postDrinks);
router.delete("/drinks/:id", DrinksController.deleteDrinks);
router.patch("drinks/:id", DrinksController.changeDrinks);
module.exports = router;
