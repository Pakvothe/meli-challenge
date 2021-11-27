import { SET_ERROR_404, SET_ERROR_500, SET_LOADED, SET_LOADING } from "./constants";

export const initialState = "idle";

export const statusReducer = (state, { type }) => {
	switch (type) {
		case SET_LOADING:
			return "loading";

		case SET_LOADED:
			return "loaded";

		case SET_ERROR_404:
			return "error-404";

		case SET_ERROR_500:
			return "error";

		default:
			throw new Error("Acción no soportada: " + type);
	}
};
