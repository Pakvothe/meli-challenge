import { useLocation } from "react-router-dom";
import { useQuery } from "../../utils/hooks/useQuery";
import Head from "../../components/Head";
import Breadcrumbs from "../../components/Breadcrumb";
import PageLayout from "../../components/PageLayout";
import ProductList from "../../components/ProductList";
// import Loading from "../../components/Loading";
// import Error from "../../components/Error";
// import ProductNotFound from "../../components/ProductNotFound";

const List = () => {
	const { search } = useLocation();
	const params = new URLSearchParams(search);
	const query = params.get("search");
	const listQuery = `?q=${query}`;
	const queryData = useQuery(listQuery, "List");

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
			<Head title={`Resultados de ${query || "tu búsqueda"} | Mercado Libre`} />
			{queryData.categories.length > 0 && <Breadcrumbs categories={queryData.categories} />}
			<PageLayout list={true}>
				{queryData.products.length > 0 && <ProductList products={queryData.products} />}
			</PageLayout>
		</>
	);
};

export default List;
