import { screen, render } from "@testing-library/react";
import PageLayout from ".";

describe("Componente <PageLayout />", () => {
	it("Se renderiza correctamente", () => {
		render(<PageLayout />);
		const main = screen.getByRole("main");
		expect(main).toBeInTheDocument();
	});

	it("Muestra los children que se le pasan", () => {
		render(
			<PageLayout>
				<h1>Hola</h1>
				<h2>Hola</h2>
				<div>
					<h3>Hola</h3>
				</div>
			</PageLayout>
		);
		const titles = screen.getAllByRole("heading");
		expect(titles.length).toBe(3);
	});
});
