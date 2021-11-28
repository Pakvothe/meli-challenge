import { render, screen } from "@testing-library/react";
import Container from ".";

describe("Componente <Container />", () => {
	it("Renderiza los children debidamente", () => {
		render(
			<Container>
				<h1>Título</h1>
			</Container>
		);
		const title = screen.getByRole("heading");
		expect(title).toBeInTheDocument();
	});
});
