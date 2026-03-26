import { useRef } from "react";
import {
	ShoppingCart,
	Globe,
	Monitor,
	Briefcase,
	Newspaper,
	Rocket,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./ServiceCard";
import "./Services.scss";

gsap.registerPlugin(ScrollTrigger);

const services = [
	{
		icon: <ShoppingCart className="service-icon" />,
		title: "E-commerce",
		description:
			"Implementação de lojas virtuais B2B, B2C e D2C em plataformas robustas como VTEX, Shopify e Nuvemshop.",
		delay: "0.1s",
	},
	{
		icon: <Globe className="service-icon" />,
		title: "Sites Institucionais",
		description:
			"Desenvolvimento de sites profissionais que transmitem credibilidade e fortalecem a presença digital da sua empresa.",
		delay: "0.15s",
	},
	{
		icon: <Monitor className="service-icon" />,
		title: "Sistemas Web",
		description:
			"Criação de sistemas sob medida para automatizar processos, gerenciar dados e otimizar a operação do seu negócio.",
		delay: "0.2s",
	},
	{
		icon: <Briefcase className="service-icon" />,
		title: "Portfólios",
		description:
			"Portfólios visuais e interativos para destacar seus trabalhos, projetos e conquistas de forma impactante.",
		delay: "0.25s",
	},
	{
		icon: <Newspaper className="service-icon" />,
		title: "Blogs e Notícias",
		description:
			"Plataformas de conteúdo otimizadas para SEO, com gestão fácil de publicações e engajamento do público.",
		delay: "0.3s",
	},
	{
		icon: <Rocket className="service-icon" />,
		title: "Landing Pages",
		description:
			"Páginas de alta conversão, focadas em captar leads e impulsionar campanhas com design persuasivo.",
		delay: "0.35s",
	},
];

const Services = () => {
	const sectionRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			gsap.fromTo(
				".services-header",
				{ y: 30, opacity: 0 },
				{
					scrollTrigger: {
						trigger: ".services-header",
						start: "top 85%",
					},
					y: 0,
					opacity: 1,
					duration: 0.8,
					ease: "power2.out",
				},
			);

			gsap.fromTo(
				".service-card",
				{ y: 40, opacity: 0 },
				{
					scrollTrigger: {
						trigger: ".services-grid",
						start: "top 85%",
					},
					y: 0,
					opacity: 1,
					duration: 0.8,
					stagger: 0.15,
					ease: "power2.out",
				},
			);
		},
		{ scope: sectionRef },
	);

	return (
		<section className="services-section section-padding" ref={sectionRef}>
			<div className="container">
				<div className="services-header">
					<h2>Nossas Especialidades</h2>
					<p>
						Oferecemos o ecossistema completo para escalar sua empresa na
						internet de ponta a ponta.
					</p>
				</div>

				<div className="services-grid">
					{services.map((service, index) => (
						<ServiceCard
							key={index}
							icon={service.icon}
							title={service.title}
							description={service.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
