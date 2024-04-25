const express = require("express");
const Products = require("../models/productModel")
const router = express.Router()
const {getProducts, getSingleProduct, createProducts, updateProducts, deleteProduct} = require("../controllers/ProductControllers");





router.post("/", createProducts);

router.get("/", getProducts);

router.get("/:id", getSingleProduct);

router.put("/:id", updateProducts);

router.delete("/:id", deleteProduct);



module.exports = router;











