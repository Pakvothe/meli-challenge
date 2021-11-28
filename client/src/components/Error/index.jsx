import PageLayout from "../PageLayout";
import SadFace from "../../assets/svg/SadFace";

const Error = () => {
	return (
		<PageLayout>
			<SadFace />
			<h2>Ocurrió un error</h2>
			<p>Por favor vuelve a intentarlo.</p>
		</PageLayout>
	);
};

export default Error;
