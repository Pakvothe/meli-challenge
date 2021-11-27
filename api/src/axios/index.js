const axios = require("axios");

const axiosInstance = axios.create({
	baseURL: "https://api.mercadolibre.com",
});

module.exports = axiosInstance;
