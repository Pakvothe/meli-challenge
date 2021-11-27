import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const ProductDetail = ({ product }) => {
	const { condition, sold_quantity, title, price, description, picture } = product;

	return (
		<main className={styles.ProductDetail}>
			<p>{condition}</p>
			<p>{sold_quantity}</p>

			<p>{title}</p>

			<p>{price.amount}</p>

			<p>{description}</p>
			<img src={picture} alt="" />
		</main>
	);
};

export default ProductDetail;

ProductDetail.propTypes = {
	product: PropTypes.shape({
		condition: PropTypes.string.isRequired,
		sold_quantity: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		price: PropTypes.shape({
			currency: PropTypes.string.isRequired,
			amount: PropTypes.number.isRequired,
			decimals: PropTypes.number.isRequired,
		}),
		description: PropTypes.string.isRequired,
		picture: PropTypes.string.isRequired,
	}).isRequired,
};
