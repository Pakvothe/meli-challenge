import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Breadcrumbs = ({ categories }) => {
	return (
		<ul className={styles.Breadcrumb}>
			{categories.map((category) => (
				<li key={category}>
					<a href="#0">{category}</a>
				</li>
			))}
		</ul>
	);
};

export default Breadcrumbs;

Breadcrumbs.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};
