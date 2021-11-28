import { render, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import Head from ".";

const MockHead = ({ title }) => (
	<HelmetProvider>
		<Head title={title} />
	</HelmetProvider>
);

const getMetaTag = (metaName) => {
	const metas = document.getElementsByTagName("meta");
	let foundMeta = "";

	for (let metaTag of metas) {
		if (metaTag.getAttribute("name") === metaName) {
			foundMeta = metaTag.getAttribute("content");
		}
	}

	return foundMeta;
};

describe("Componente <Head />", () => {
	it("Cambia el título del <head>", async () => {
		render(<MockHead title={"Mi título"} />);
		await waitFor(() => {
			expect(document.title).toEqual("Mi título");
			expect(document.title).not.toEqual("Mi título 123");
		});
	});

	it("Renderiza meta tags", async () => {
		render(<MockHead title="Mercado Libre" />);
		await waitFor(() => {
			expect(getMetaTag("description")).toEqual("Desafío técnico de MercadoLibre.");
			expect(getMetaTag("author")).toEqual("Franco Ortiz");
			expect(getMetaTag("author")).not.toEqual("Cualquier otro author");
		});
	});
});
