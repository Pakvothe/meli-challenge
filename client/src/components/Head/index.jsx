import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const Head = ({ title }) => {
	return (
		<Helmet>
			<meta charset="utf-8" />
			<title>{title}</title>
			<link rel="icon" href="logo.png" type="image/x-icon" />
			<meta name="description" content="Desafío técnico de MercadoLibre." />
			<meta name="keywords" content="Mercado Libre, React, Front-end, JavaScript" />
			<meta name="author" content="Franco Ortiz" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#ffe600" />

			{/* OG Tags */}
			<meta property="og:title" content={title} />
			<meta property="og:locale" content="es_AR" />
			<meta property="og:url" content="" />
			<meta property="og:type" content="website" />
			<meta property="og:description" content="Desafío técnico de MercadoLibre." />
			<meta property="og:image" content="" />

			{/* TAGS DE TWITTER */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:url" content="" />
			<meta name="twitter:site" content="@mercadolibre" />
			<meta name="twitter:description" content="Desafío técnico de Mercado Libre." />
			<meta name="twitter:image" content="" />
			<meta name="twitter:image:alt" content="Pantalla de inicio de la aplicación" />
		</Helmet>
	);
};

export default Head;

Head.propTypes = {
	title: PropTypes.string.isRequired,
};
