import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const PageLayout = ({ list, children }) => {
	return (
		<main className={styles.PageLayout} style={list && { marginTop: 0 }}>
			<div style={list && { width: "100%" }}>{children}</div>
		</main>
	);
};

export default PageLayout;

PageLayout.propTypes = {
	children: PropTypes.node,
};
