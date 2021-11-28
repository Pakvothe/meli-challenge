import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Error404 from ".";

const MockError404 = () => (
	<BrowserRouter>
		<Error404 />
	</BrowserRouter>
);

describe("Componente <Error404 />", () => {
	beforeEach(() => {
		render(<MockError404 />);
	});

	it("Se renderiza correctamente", () => {
		const main = screen.getByRole("main");
		expect(main).toBeInTheDocument();
	});

	it("Contiene un título", () => {
		const title = screen.getByRole("heading");
		expect(title).toBeInTheDocument();
	});

	it("Contiene un enlace para volver al inicio", () => {
		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("href", "/");
	});
});
