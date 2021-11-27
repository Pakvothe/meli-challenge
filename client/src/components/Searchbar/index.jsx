import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import Search from "../../assets/search.png";

const Searchbar = () => {
	const navigate = useNavigate();
	const [input, setInput] = useState();

	const handleSubmit = (ev) => {
		ev.preventDefault();
		input && navigate(`/items?search=${input}`);
		setInput("");
	};

	const handleChange = (ev) => {
		setInput(ev.target.value);
	};
	return (
		<form className={styles.searchBar} onSubmit={handleSubmit}>
			<label htmlFor="search-input">Buscar un producto</label>
			<input
				type="text"
				id="search-input"
				placeholder="Nunca dejes de buscar"
				value={input}
				onChange={handleChange}
			/>
			<button type="submit" aria-label="Buscar">
				<img src={Search} alt="Buscar" />
			</button>
		</form>
	);
};

export default Searchbar;
