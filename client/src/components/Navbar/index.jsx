import Searchbar from "../Searchbar";
import Container from "../Container";
import Logo from "../Logo";
import styles from "./styles.module.scss";

const Navbar = () => (
	<nav className={styles.navbar}>
		<Container>
			<Logo />
			<Searchbar />
		</Container>
	</nav>
);

export default Navbar;
