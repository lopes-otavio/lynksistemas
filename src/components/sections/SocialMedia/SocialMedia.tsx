import { useEffect } from "react";
import {
	ArrowRight,
	Heart,
	MessageCircle,
	Share2,
	TrendingUp,
} from "lucide-react";
import "./SocialMedia.scss";

import mockupImg from "../../../assets/social-media-mockup.png";

const SocialMedia = () => {
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
		<section className="social-media-section section-padding">
			<div className="container">
				<div className="social-media-content">
					<div className="social-media-text animate-on-scroll">
						<div className="section-badge">Conteúdo & Engajamento</div>
						<h2>
							Social Media de <br />
							Alta Conversão
						</h2>

						<p className="lead-text">
							Não fazemos apenas posts bonitos. Criamos ecossistemas de conteúdo
							projetados para gerar atenção, reter público e converter
							seguidores em clientes.
						</p>

						<div className="features-list">
							<div className="feature-item">
								<div className="feature-icon">
									<TrendingUp size={24} />
								</div>
								<div className="feature-text">
									<h4>Conteúdos Virais e Estratégicos</h4>
									<p>
										Mapeamos tendências para posicionar sua marca na frente.
									</p>
								</div>
							</div>

							<div className="feature-item">
								<div
									className="feature-icon"
									style={{
										color: "#E1306C",
										backgroundColor: "rgba(225, 48, 108, 0.1)",
									}}
								>
									<Heart size={24} />
								</div>
								<div className="feature-text">
									<h4>Gestão de Comunidade</h4>
									<p>
										Criamos defensores fiéis da sua marca através de interação
										ativa.
									</p>
								</div>
							</div>

							<div className="feature-item">
								<div
									className="feature-icon"
									style={{
										color: "#25D366",
										backgroundColor: "rgba(37, 211, 102, 0.1)",
									}}
								>
									<Share2 size={24} />
								</div>
								<div className="feature-text">
									<h4>Distribuição Omnichannel</h4>
									<p>
										Presença sólida no Instagram, TikTok, LinkedIn e Pinterest.
									</p>
								</div>
							</div>
						</div>

						<button className="btn btn-primary btn-lg mt-8">
							Quero uma auditoria grátis
							<ArrowRight size={18} />
						</button>
					</div>

					<div
						className="social-media-visual animate-on-scroll"
						style={{ animationDelay: "0.2s" }}
					>
						<div className="mockup-container">
							<div className="glow-effect"></div>
							<img
								src={mockupImg}
								alt="Exemplo de conteúdo viral em smartphone"
								className="mockup-img"
							/>

							{/* Floating Engagement Badges */}
							<div className="floating-badge badge-1">
								<Heart size={16} fill="currentColor" />
								<span>12k</span>
							</div>
							<div className="floating-badge badge-2">
								<MessageCircle size={16} fill="currentColor" />
								<span>842</span>
							</div>
							<div className="floating-badge badge-3">
								<Share2 size={16} />
								<span>+250%</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SocialMedia;
