import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./styles.module.scss";

const Logo = () => {
	return (
		<div className={styles.Container}>
			<Link to="/" aria-label="Back to Home">
				<img src={logo} alt="Meli-logo" />
			</Link>
		</div>
	);
};

export default Logo;
