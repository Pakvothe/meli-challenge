import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import ShippingImg from "../../assets/shipping.png";

const ProductCard = ({ product }) => {
	const navigate = useNavigate();
	const { picture, title, price, free_shipping, id } = product;
	const numberFormat = new Intl.NumberFormat("es-AR", {
		currency: price.currency,
		style: "currency",
	});

	const handleNavigate = (id) => {
		navigate(`/items/${id}`);
	};

	return (
		<article className={styles.ProductCard} onClick={() => handleNavigate(id)}>
			<div className={styles.Image}>
				<img src={picture} alt={`${title}`} />
			</div>
			<div className={styles.Info}>
				<span>
					{free_shipping && (
						<>
							<h5>{numberFormat.format(price.amount)}</h5>
							<img src={ShippingImg} alt="Envío gratis" />
						</>
					)}
				</span>
				<p>{title}</p>
			</div>
			<p className={styles.Location}>{product.address}</p>
		</article>
	);
};

export default ProductCard;

ProductCard.propTypes = {
	product: PropTypes.shape({
		picture: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		price: PropTypes.shape({
			currency: PropTypes.string.isRequired,
			amount: PropTypes.number.isRequired,
			decimals: PropTypes.number.isRequired,
		}),
		free_shipping: PropTypes.bool.isRequired,
		id: PropTypes.string.isRequired,
	}).isRequired,
};
