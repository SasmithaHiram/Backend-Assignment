const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.post("/create", productController.create);
router.get("/getAll", productController.getAll);
router.get("/getById/:id", productController.getById);
router.put("/update/:id", productController.update);
router.delete("/delete/:id", productController.delete);

module.exports = router;
