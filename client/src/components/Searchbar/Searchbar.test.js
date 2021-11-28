import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import SearchBar from ".";

describe("Componente <Searchbar />", () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<SearchBar />
			</BrowserRouter>
		);
	});

	it("Se renderiza correctamente", () => {
		const form = screen.getByTestId("search-form");
		expect(form).toBeInTheDocument();
	});

	it("Muestra un placeholder", () => {
		const input = screen.getByPlaceholderText("Nunca dejes de buscar");
		expect(input).toBeInTheDocument();
	});

	it("Contiene un label", () => {
		const label = screen.getByText("Buscar un producto");
		expect(label).toBeInTheDocument();
	});

	it("Contiene un botón", () => {
		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();
	});

	it("El botón contiene una imagen", () => {
		const img = screen.getByAltText("Buscar");
		expect(img).toBeInTheDocument();
	});

	it("Se puede tipear en el input", () => {
		const input = screen.getByPlaceholderText("Nunca dejes de buscar");
		userEvent.type(input, "iPhone 9s 64gb ram dorado");
		expect(input).toHaveValue("iPhone 9s 64gb ram dorado");
	});

	it("Se puede enviar presionando Enter", () => {
		const input = screen.getByPlaceholderText("Nunca dejes de buscar");
		const form = screen.getByTestId("search-form");
		const mockFn = jest.fn();
		form.onsubmit = mockFn;
		userEvent.type(input, "{enter}");
		userEvent.type(input, "{enter}");
		expect(mockFn).toHaveBeenCalledTimes(2);
	});

	it("Se puede enviar cliqueando en el botón", () => {
		const button = screen.getByRole("button", { name: "Buscar" });
		const form = screen.getByTestId("search-form");
		const mockFn = jest.fn();
		form.onsubmit = mockFn;
		userEvent.click(button);
		userEvent.click(button);
		userEvent.click(button);
		expect(mockFn).toHaveBeenCalledTimes(3);
	});

	it("Modifica la URL una vez enviado", () => {
		const input = screen.getByPlaceholderText("Nunca dejes de buscar");
		userEvent.type(input, "macbook");
		userEvent.type(input, "{enter}");
		expect(window.location.pathname).toEqual("/items");
		expect(window.location.search).toEqual("?search=macbook");
	});
});
