import PropTypes from "prop-types";
import PageLayout from "../PageLayout";
import styles from "./styles.module.scss";

const Loading = ({ text }) => {
	return (
		<PageLayout>
			<div className={styles.Spinner} />
			{text && <h2>{text}</h2>}
		</PageLayout>
	);
};

export default Loading;

Loading.propTypes = {
	text: PropTypes.string,
};
