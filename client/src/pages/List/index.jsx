import { useLocation } from "react-router-dom";
import { useQuery } from "../../utils/hooks/useQuery";
import Head from "../../components/Head";
import Breadcrumbs from "../../components/Breadcrumb";
import PageLayout from "../../components/PageLayout";
import ProductList from "../../components/ProductList";
import Loading from "../../components/Loading";
import Error404 from "../../components/Error404";
import Error from "../../components/Error";

const List = () => {
	const { search } = useLocation();
	const params = new URLSearchParams(search);
	const query = params.get("search");
	const listQuery = `?q=${query}`;
	const { products, categories, status } = useQuery(listQuery, "List");

	const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

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
			<Head title={`${capitalize(query) || "tu búsqueda"} | MercadoLibre`} />
			{categories.length > 0 && <Breadcrumbs categories={categories} />}
			<PageLayout list={true}>
				{products.length > 0 && <ProductList products={products} />}
			</PageLayout>
		</>
	);
};

export default List;
