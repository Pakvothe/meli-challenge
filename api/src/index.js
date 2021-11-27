require("dotenv").config();
const express = require("express");
const api = express();
const cors = require("cors");
const routes = require("./routes/index");

api.use(cors());
api.use(routes);

api.listen(process.env.PORT, () => {
	console.log("Servidor escuchando en puerto " + process.env.PORT);
});
