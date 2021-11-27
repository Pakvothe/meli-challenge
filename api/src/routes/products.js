const express = require("express");
const router = express.Router();
const { getProducts, getProductInfo } = require("../controllers/products");

router.get("/", getProducts);
router.get("/:id", getProductInfo);

module.exports = router;
