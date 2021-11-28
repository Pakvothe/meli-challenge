import { screen, render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const MockApp = () => (
	<HelmetProvider>
		<App />
	</HelmetProvider>
);

describe("Componente <App />", () => {
	beforeEach(() => {
		render(<MockApp />);
	});

	it("Renderiza la Navbar", () => {
		const nav = screen.getByRole("navigation");
		const input = screen.getByPlaceholderText("Nunca dejes de buscar");
		expect(nav).toBeInTheDocument();
		expect(input).toBeInTheDocument();
	});

	it("Renderiza el Home", () => {
		const title = screen.getByRole("heading", {
			name: "¡Bienvenido al challenge Frontend de MercadoLibre!",
		});
		expect(title).toBeInTheDocument();
	});

	it("Renderiza el Footer", () => {
		const footer = screen.getByText("Realizado por", { exact: false });
		expect(footer).toBeInTheDocument();
	});
});
