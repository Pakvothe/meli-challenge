import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import Head from "../../components/Head";
import SadFace from "../../assets/svg/SadFace";

const Page404 = () => (
	<>
		<Head title="Página no encontrada | MercadoLibre" />
		<PageLayout>
			<SadFace />
			<h2>La página a la que intentas ingresar no existe</h2>
			<p>
				Revisa posibles errores de tipeo o <Link to="/">vuelve al inicio</Link>.
			</p>
		</PageLayout>
	</>
);

export default Page404;
