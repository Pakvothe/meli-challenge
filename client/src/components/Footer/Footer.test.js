import { screen, render } from "@testing-library/react";
import Footer from ".";

describe("Componente <Footer />", () => {
	it("Renderiza un elemento footer", () => {
		render(<Footer />);
		const footer = screen.getByRole("contentinfo");
		expect(footer).toBeInTheDocument();
	});

	it("Contiene un enlace a mi portfolio", () => {
		render(<Footer />);
		const link = screen.getByRole("link", { name: "Franco Ortiz" });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "https://www.franco-ortiz.com/");
	});
});
