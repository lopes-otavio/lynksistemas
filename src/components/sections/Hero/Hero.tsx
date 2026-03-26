import { useEffect, useState, useRef } from "react";
import { ArrowRight, Zap, Code, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Hero.scss";

import heroImg from "../../../assets/hero.jpeg";
import heroVideo from "../../../assets/hero-video.mp4";

const Hero = () => {
	const [videoLoaded, setVideoLoaded] = useState(false);
	const heroRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			gsap.from(".gsap-anim", {
				y: 40,
				opacity: 0,
				duration: 1,
				stagger: 0.15,
				ease: "power3.out",
				delay: 0.1,
			});
		},
		{ scope: heroRef },
	);

	useEffect(() => {
		const handleLoad = () => setVideoLoaded(true);

		if (document.readyState === "complete") {
			handleLoad();
		} else {
			window.addEventListener("load", handleLoad);
			return () => window.removeEventListener("load", handleLoad);
		}
	}, []);

	return (
		<section className="hero-section" ref={heroRef}>
			<div className="hero-background">
				<img
					src={heroImg}
					alt="Background"
					className={`hero-bg-media hero-bg-img ${videoLoaded ? "fade-out" : ""}`}
				/>
				{videoLoaded && (
					<video
						src={heroVideo}
						autoPlay
						loop
						muted
						playsInline
						className="hero-bg-media hero-bg-video fade-in"
					/>
				)}
				<div className="hero-overlay"></div>
			</div>

			<div className="container">
				<div className="hero-content">
					<div className="hero-badge gsap-anim">
						<span className="badge-icon">
							<Zap size={14} />
						</span>
						Acelere os resultados da sua empresa
					</div>

					<h1 className="hero-title gsap-anim">
						Transforme regras de negócio em
						<span className="text-highlight"> resultados</span> de forma rápida.
					</h1>

					<p className="hero-subtitle gsap-anim">
						Aceleramos sua operação com e-commerces de alta performance,
						integrações inteligentes e estratégias de marketing focadas em
						conversão real.
					</p>

					<div className="hero-actions gsap-anim">
						<a
							href="https://wa.me/5545999666167?text=Olá! Gostaria de saber mais sobre os serviços da Lynk Sistemas."
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-primary btn-lg"
						>
							Falar com Especialista
							<ArrowRight size={18} />
						</a>
						<a href="#contato" className="btn btn-outline btn-lg">
							Ver Cases de Sucesso
						</a>
					</div>

					<div className="hero-stats gsap-anim">
						<div className="stat-item">
							<div className="stat-icon">
								<Code size={20} />
							</div>
							<div className="stat-text">
								<strong>+50</strong>
								<span>Projetos Entregues</span>
							</div>
						</div>
						<div className="stat-divider"></div>
						<div className="stat-item">
							<div className="stat-icon">
								<TrendingUp size={20} />
							</div>
							<div className="stat-text">
								<strong>4 anos</strong>
								<span>De Experiência</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Decorative background elements inspired by Finexo */}
			<div className="hero-glow hero-glow-1"></div>
			<div className="hero-glow hero-glow-2"></div>
		</section>
	);
};

export default Hero;
