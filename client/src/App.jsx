import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components ==>
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Pages ==>
import Home from "./pages/Home";
import List from "./pages/List";
import Product from "./pages/Product";
import Page404 from "./pages/Page404";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Container>
				<Routes>
					<Route path="*" element={<Page404 />} />
					<Route exact path="/" element={<Home />} />
					<Route exact path="/items" element={<List />} />
					<Route exact path="/items/:id" element={<Product />} />
				</Routes>
			</Container>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
