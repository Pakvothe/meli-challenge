import { render, screen } from "@testing-library/react";
import Error from ".";

describe("Componente <Error />", () => {
	it("Se renderiza debidamente en pantalla", () => {
		render(<Error />);
		const title = screen.getByRole("heading");
		expect(title).toBeInTheDocument();
	});
});
