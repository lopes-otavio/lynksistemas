import React, { useEffect } from "react";
import { FaGoogle, FaMeta, FaLinkedin, FaTiktok } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";
import "./Marketing.scss";

const platforms = [
	{
		title: "Google Ads",
		description:
			"Capture demanda no momento exato de busca e escale vendas com o maior buscador do mundo.",
		icon: <FaGoogle size={32} />,
		color: "google",
	},
	{
		title: "Meta Ads (Facebook & Instagram)",
		description:
			"Alcance seu público-alvo com precisão através de anúncios visuais de alta conversão.",
		icon: <FaMeta size={32} />,
		color: "meta",
	},
	{
		title: "LinkedIn Ads",
		description:
			"Estratégias avançadas B2B para gerar leads qualificados e fortalecer sua autoridade corporativa.",
		icon: <FaLinkedin size={32} />,
		color: "linkedin",
	},
	{
		title: "TikTok Ads",
		description:
			"Engaje uma nova geração de consumidores com conteúdos em vídeo criativos e virais.",
		icon: <FaTiktok size={32} />,
		color: "tiktok",
	},
];

const Marketing = () => {
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
		<section className="marketing-section section-padding">
			<div className="container">
				<div className="marketing-header animate-on-scroll">
					<div className="section-badge">Performance</div>
					<h2>Tráfego Pago Especializado</h2>
					<p>
						Transformamos cada clique em cliente. Campanhas otimizadas para
						maximizar o seu Retorno Sobre o Investimento (ROI) em todas as
						plataformas.
					</p>
				</div>

				<div className="marketing-grid">
					{platforms.map((platform, index) => (
						<div
							className="platform-card animate-on-scroll"
							key={index}
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className={`platform-icon icon-${platform.color}`}>
								{platform.icon}
							</div>
							<h3>{platform.title}</h3>
							<p>{platform.description}</p>
							<a href="#" className="platform-link">
								Saber mais <ArrowRight size={16} />
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Marketing;
