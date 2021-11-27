const express = require("express");
const router = express.Router();
const productsRouter = require("./products");

router.use("/api/items", productsRouter);

module.exports = router;
