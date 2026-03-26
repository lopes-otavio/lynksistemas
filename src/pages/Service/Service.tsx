import { useParams, Navigate } from "react-router-dom";
import { servicesData } from "../../data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CallToAction from "../../components/sections/CallToAction/CallToAction";
import ContactForm from "../../components/sections/ContactForm/ContactForm";
import "./Service.scss";

import {
	FaWordpress,
	FaReact,
	FaNodeJs,
	FaShopify,
	FaAngular,
} from "react-icons/fa6";
import {
	SiNextdotjs,
	SiVtex,
	SiPostgresql,
	SiMongodb,
	SiGreensock,
} from "react-icons/si";
import nuvemLogo from "../../assets/ecommerce/nuvemshop-mini-color.png";

const techIconMap: Record<string, React.ReactNode> = {
	React: <FaReact size={50} color="#61dafb" />,
	Angular: <FaAngular size={50} color="#dd0031" />,
	"Next.js": <SiNextdotjs size={50} color="#000000" />,
	"Node.js": <FaNodeJs size={50} color="#339933" />,
	WordPress: <FaWordpress size={50} color="#21759b" />,
	Shopify: <FaShopify size={50} color="#96bf48" />,
	NuvemShop: (
		<img
			src={nuvemLogo}
			alt="Nuvemshop"
			style={{ width: 50, height: 50, objectFit: "contain" }}
		/>
	),
	VTEX: <SiVtex size={50} color="#f71963" />,
	PostgreSQL: <SiPostgresql size={50} color="#336791" />,
	MongoDB: <SiMongodb size={50} color="#47a248" />,
	GSAP: <SiGreensock size={50} color="#88ce02" />,
};

const Service = () => {
	const { slug } = useParams<{ slug: string }>();

	if (!slug || !servicesData[slug]) {
		return <Navigate to="/" replace />;
	}

	const service = servicesData[slug];

	return (
		<main className="service-page header-offset">
			{/* Lateralized Hero Section */}
			<section className="service-hero">
				<div className="container">
					<div className="hero-grid">
						<div className="hero-content">
							<h1>{service.title}</h1>
							<p className="subtitle">{service.subtitle}</p>
							<p className="description">{service.description}</p>
							<div className="cta-group">
								<a
									href="https://wa.me/5545999666167"
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary"
								>
									Falar com Especialista <ArrowRight size={16} />
								</a>
							</div>
						</div>
						<div className="hero-image">
							<img src={service.image} alt={service.title} />
						</div>
					</div>
				</div>
			</section>

			{/* CTA Immediately after Hero */}
			<CallToAction />

			{/* Benefits Section */}
			{service.benefits.length > 0 && (
				<section className="service-benefits section-padding bg-secondary">
					<div className="container">
						<div className="section-header text-center mb-5">
							<h2>
								Por que escolher a <span className="text-highlight">Lynk</span>?
							</h2>
							<p
								className="text-muted"
								style={{ maxWidth: "600px", margin: "0 auto" }}
							>
								Desenhamos soluções pensando no crescimento unificado em longo
								prazo do seu modelo de negócio.
							</p>
						</div>
						<div className="benefits-grid">
							{service.benefits.map((benefit, index) => {
								const Icon = benefit.icon || CheckCircle2;
								return (
									<div className="benefit-card" key={index}>
										<div className="icon-wrapper">
											<Icon size={32} />
										</div>
										<h3>{benefit.title}</h3>
										<p>{benefit.text}</p>
									</div>
								);
							})}
						</div>
					</div>
				</section>
			)}

			{/* Tech Stack (Similar to PlatformPartners) */}
			{service.technologies.length > 0 && (
				<section className="service-tech section-padding">
					<div className="container text-center">
						<h2
							className="mb-4"
							style={{ color: "var(--dark-navy)", fontSize: "2.5rem" }}
						>
							Engenharia que dominamos neste serviço
						</h2>
						<p
							className="text-muted mb-5"
							style={{
								maxWidth: "600px",
								margin: "0 auto 40px",
								fontSize: "1.25rem",
							}}
						>
							Arquiteturas modernas e escaláveis.
						</p>
						<div className="tech-logos-grid">
							{service.technologies.map((tech, index) => (
								<div className="tech-logo-item" key={index}>
									<div className="icon-box">
										{techIconMap[tech] || (
											<CheckCircle2 size={50} color="var(--primary-blue)" />
										)}
									</div>
									<span>{tech}</span>
								</div>
							))}
						</div>
					</div>
				</section>
			)}

			{/* Contact Form at the End */}
			<ContactForm />
		</main>
	);
};

export default Service;
