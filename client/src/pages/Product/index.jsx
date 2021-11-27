import { useParams } from "react-router-dom";
import { useQuery } from "../../utils/hooks/useQuery";
import Breadcrumbs from "../../components/Breadcrumb";
import PageLayout from "../../components/PageLayout";
import Head from "../../components/Head";
import ProductDetail from "../../components/ProductDetail";
// import Loading from "../../components/Loading";
// import Error from "../../components/Error";
// import ProductNotFound from "../../components/ProductNotFound";

const Product = () => {
	const { id } = useParams();
	const productQuery = `/${id}`;
	const queryData = useQuery(productQuery, "Product");
	const product = queryData.products;

	// if (queryData.status === "loading") {
	// 	return <Loading text="Buscando..." />;
	// }

	// if (queryData.status === "error-404") {
	// 	return <ProductNotFound />;
	// }

	// if (queryData.status === "error") {
	// 	return <Error />;
	// }

	return (
		<>
			<Head title={`${product.title} | Mercado Libre"`} />
			{queryData.categories.length > 0 && <Breadcrumbs categories={queryData.categories} />}
			<PageLayout list={true}>
				{product.id ? <ProductDetail product={product} /> : null}
			</PageLayout>
		</>
	);
};

export default Product;
