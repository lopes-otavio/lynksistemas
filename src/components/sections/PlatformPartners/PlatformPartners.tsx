import React, { useEffect } from "react";
import { FaWordpress, FaReact, FaNodeJs, FaAws } from "react-icons/fa6";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import "./PlatformPartners.scss";

// Using the colored logos downloaded during research
import vtexLogo from "../../../assets/ecommerce/vtex-color.png";
import shopifyLogo from "../../../assets/ecommerce/shopify-color.png";
import nuvemLogo from "../../../assets/ecommerce/nuvemshop-color.png";

const PlatformPartners = () => {
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
		<section className="partners-section section-padding">
			<div className="container">
				<div className="partners-grid animate-on-scroll">
					{/* E-commerce Column */}
					<div className="partners-column">
						<div className="section-badge">E-commerce</div>
						<h3>Escolher a plataforma certa é crucial para o seu negócio</h3>
						<p className="column-desc">
							Somos especialistas nas plataformas líderes de mercado, garantindo
							robustez, escalabilidade e performance para o seu ecossistema de
							vendas online.
						</p>
						<div className="logos-grid ecommerce-logos">
							<div className="logo-wrapper">
								<img src={vtexLogo} alt="VTEX" className="partner-logo" />
							</div>
							<div className="logo-wrapper">
								<img src={shopifyLogo} alt="Shopify" className="partner-logo" />
							</div>
							<div className="logo-wrapper">
								<img src={nuvemLogo} alt="Nuvemshop" className="partner-logo" />
							</div>
						</div>
					</div>

					<div className="partners-divider"></div>

					{/* Web Apps Column */}
					<div className="partners-column">
						<div className="section-badge web-badge">Web & Institucional</div>
						<h3>Tecnologias que Dominamos</h3>
						<p className="column-desc">
							Desenvolvemos arquiteturas modernas e sob medida, desde portais
							institucionais rápidos até aplicações e integrações complexas.
						</p>
						<div className="logos-grid tech-logos">
							<div className="tech-logo" title="WordPress">
								<FaWordpress size={40} className="icon-wp" />
								<span>WordPress</span>
							</div>
							<div className="tech-logo" title="React">
								<FaReact size={40} className="icon-react" />
								<span>React</span>
							</div>
							<div className="tech-logo" title="Next.js">
								<SiNextdotjs size={40} className="icon-next" />
								<span>Next.js</span>
							</div>
							<div className="tech-logo" title="TypeScript">
								<SiTypescript size={40} className="icon-ts" />
								<span>TypeScript</span>
							</div>
							<div className="tech-logo" title="Node.js">
								<FaNodeJs size={40} className="icon-node" />
								<span>Node.js</span>
							</div>
							<div className="tech-logo" title="AWS">
								<FaAws size={40} className="icon-aws" />
								<span>AWS</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PlatformPartners;
