import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const ProductDetail = ({ product }) => {
	const { condition, sold_quantity, title, price, description, picture } = product;

	return (
		<main className={styles.ProductDetail}>
			<div className={styles.LeftDivider}>
				<div className={styles.ProductImg}>
					<img src={picture} alt="Product" />
				</div>

				<div className={styles.Description}>
					<h2>Descripción del producto</h2>
					<p>{description}</p>
				</div>
			</div>
			<div className={styles.RightDivider}>
				<p className={styles.Condition}>
					{condition} - {sold_quantity} vendidos
				</p>
				<h3>{title}</h3>
				<p className={styles.Price}>
					$ {price.amount}
					<little>00</little>
				</p>
				<button>Comprar</button>
			</div>
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
