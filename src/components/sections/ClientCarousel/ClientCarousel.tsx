import { useEffect } from "react";
import "./ClientCarousel.scss";

import kaloriLogo from "../../../assets/clients/kalori-ai.png";
import futureCoLogo from "../../../assets/clients/futureco.png";
import endopeakLogo from "../../../assets/clients/endopeak.png";
import prostadineLogo from "../../../assets/clients/prostadine.png";

const clients = [
	{ name: "Kalori AI", logo: kaloriLogo },
	{ name: "Future Co", logo: futureCoLogo },
	{ name: "EndoPeak", logo: endopeakLogo },
	{ name: "Prostadine", logo: prostadineLogo },
];

const ClientCarousel = () => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
					}
				});
			},
			{ threshold: 0.1 },
		);

		document.querySelectorAll(".animate-on-scroll").forEach((el) => {
			observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<section className="client-carousel-section section-padding">
			<div
				className="container"
				style={{ textAlign: "center", marginBottom: "40px" }}
			>
				<h2 className="animate-on-scroll">
					Marcas que confiam na{" "}
					<span style={{ color: "var(--primary-blue)" }}>Lynk</span>
				</h2>
				<p className="animate-on-scroll" style={{ color: "var(--text-muted)" }}>
					Junte-se a dezenas de empresas que transformaram suas vendas.
				</p>
			</div>

			<div className="carousel-wrapper animate-on-scroll">
				<div className="carousel-track">
					{/* Quadruple the list for seamless infinite scroll */}
					{[...clients, ...clients, ...clients, ...clients].map(
						(client, index) => (
							<div className="client-logo-box" key={index}>
								<img
									src={client.logo}
									alt={client.name}
									className="client-logo-img"
								/>
							</div>
						),
					)}
				</div>
			</div>
		</section>
	);
};

export default ClientCarousel;
