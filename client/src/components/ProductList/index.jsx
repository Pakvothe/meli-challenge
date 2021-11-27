import PropTypes from "prop-types";
import ProductCard from "../ProductCard";
import styles from "./styles.module.scss";

const ProductList = ({ products }) => {
	return (
		<main className={styles.ProductList}>
			{products.map((prod) => (
				<ProductCard key={prod.id} product={prod} />
			))}
		</main>
	);
};

export default ProductList;

ProductList.propTypes = {
	products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
