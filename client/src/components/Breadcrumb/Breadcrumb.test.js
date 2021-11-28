import { render, screen } from "@testing-library/react";
import Breadcrumb from ".";

describe("Componente <Breadcrumb />", () => {
	it("Renderiza las breadcrumbs", () => {
		render(<Breadcrumb categories={["Item 1", "Item 2", "Item 3"]} />);
		const breadCrumbList = screen.getByRole("list");
		expect(breadCrumbList).toBeInTheDocument();
	});

	it("Renderiza todos los elementos del array pasado por props", () => {
		render(<Breadcrumb categories={["Item 1", "Item 2", "Item 3"]} />);
		const listOfLinks = screen.getAllByRole("listitem");
		expect(listOfLinks.length).toBe(3);
	});

	it("Muestra correctamente el texto", () => {
		render(<Breadcrumb categories={["Texto 1", "Enlace 2", "Link 3"]} />);
		const link = screen.getByText("Enlace 2");
		expect(link).toBeInTheDocument();
	});
});
