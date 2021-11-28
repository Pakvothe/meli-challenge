import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from ".";

const MockNavbar = () => (
	<BrowserRouter>
		<Navbar />
	</BrowserRouter>
);

beforeEach(() => {
	render(<MockNavbar />);
});

describe("Componente <Navbar />", () => {
	it("Se renderiza en pantalla", () => {
		const nav = screen.getByRole("navigation");
		expect(nav).toBeInTheDocument();
	});

	it("Contiene el componente <Logo />", () => {
		const img = screen.getByAltText("Meli-logo");
		expect(img).toBeInTheDocument();
	});

	it("Contiene el componente <SearchBar />", () => {
		const input = screen.getByPlaceholderText("Nunca dejes de buscar");
		expect(input).toBeInTheDocument();
	});
});
