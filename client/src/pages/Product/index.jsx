import { useParams } from "react-router-dom";
import { useQuery } from "../../utils/hooks/useQuery";
import Breadcrumbs from "../../components/Breadcrumb";
import PageLayout from "../../components/PageLayout";
import Head from "../../components/Head";
import ProductDetail from "../../components/ProductDetail";
import Loading from "../../components/Loading";
import Error404 from "../../components/Error404";
import Error from "../../components/Error";

const Product = () => {
	const { id } = useParams();
	const productQuery = `/${id}`;
	const { products, categories, status } = useQuery(productQuery, "Product");
	const product = products;

	if (status === "loading") {
		return <Loading text="Buscando..." />;
	}

	if (status === "error-404") {
		return <Error404 />;
	}

	if (status === "error") {
		return <Error />;
	}

	return (
		<>
			<Head title={`${product.title} | MercadoLibre"`} />
			{categories.length > 0 && <Breadcrumbs categories={categories} />}
			<PageLayout list={true}>
				{product.id ? <ProductDetail product={product} /> : null}
			</PageLayout>
		</>
	);
};

export default Product;
