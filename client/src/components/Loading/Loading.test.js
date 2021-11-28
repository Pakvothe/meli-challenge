import { render, screen } from "@testing-library/react";
import Loading from ".";

describe("Componente <Loading />", () => {
	it("Se renderiza debidamente en pantalla", () => {
		render(<Loading text="Título del spinner" />);
		const title = screen.getByRole("heading");
		expect(title).toBeInTheDocument();
	});

	it("Permite pasar por props el texto visible en pantalla", () => {
		render(<Loading text="Título personalizado..." />);
		const title = screen.getByText("Título personalizado...");
		expect(title).toBeInTheDocument();
	});
});
