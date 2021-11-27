import Container from "../Container";
import styles from "./styles.module.scss";

const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<Container>
				<p>
					Realizado por{" "}
					<a href="https://www.franco-ortiz.com/" target="_blank" rel="noopener noreferrer">
						Franco Ortiz
					</a>
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
