import { Link } from "react-router-dom";
import PageLayout from "../PageLayout";
import SadFace from "../../assets/svg/SadFace";
const Error404 = () => {
	return (
		<PageLayout>
			<SadFace />
			<h2>No se encontraron productos</h2>
			<p>
				Revisa la ortografía de la palabra, intenta buscar términos más genéricos o{" "}
				<Link to="/">vuelve al inicio</Link>.
			</p>
		</PageLayout>
	);
};

export default Error404;
