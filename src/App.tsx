import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cases from "./pages/Cases/Cases";
import About from "./pages/About/About";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import ScrollToTop from "./components/layout/ScrollToTop/ScrollToTop";
import Service from "./pages/Service/Service";

function App() {
	return (
		<>
			<ScrollToTop />
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cases" element={<Cases />} />
					<Route path="/sobre-nos" element={<About />} />
					<Route path="/termos" element={<Terms />} />
					<Route path="/privacidade" element={<Privacy />} />
					<Route path="/servicos/:slug" element={<Service />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
