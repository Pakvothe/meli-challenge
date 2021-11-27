import PropTypes from "prop-types";
import { useEffect, useState, useReducer } from "react";
import axios from "../../utils/axios";
import { initialState, statusReducer } from "../../store";
import { SET_LOADING, SET_LOADED, SET_ERROR_500, SET_ERROR_404 } from "../../store/constants";

export const useQuery = (ComponentQuery, Component) => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [status, dispatch] = useReducer(statusReducer, initialState);

	useEffect(() => {
		dispatch({ type: SET_LOADING });
		axios
			.get(`/api/items${ComponentQuery}`)
			.then(({ data }) => {
				console.log(`data`, data);
				setCategories(data.categories);

				if (Component === "Product") {
					setProducts(data.item);
				} else {
					setProducts(data.items);
				}
				dispatch({ type: SET_LOADED });
			})
			.catch((err) => {
				if (err.message.endsWith("404")) {
					dispatch({ type: SET_ERROR_404 });
				} else {
					dispatch({ type: SET_ERROR_500 });
				}
			});
	}, [ComponentQuery, Component]);

	return {
		products,
		categories,
		status,
	};
};

useQuery.propTypes = {
	ComponentQuery: PropTypes.string.isRequired,
	Component: PropTypes.string.isRequired,
};
