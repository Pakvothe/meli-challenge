import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Logo from ".";

const MockLogo = () => (
	<BrowserRouter>
		<Logo />
	</BrowserRouter>
);

describe("Componente <Logo />", () => {
	it("Muestra una imagen en pantalla", () => {
		render(<MockLogo />);
		const img = screen.getByRole("img");
		expect(img).toBeInTheDocument();
	});

	it("Contiene un enlace para volver al inicio", () => {
		render(<MockLogo />);
		const link = screen.getByRole("link");
		expect(link).toBeInTheDocument();
	});
});
