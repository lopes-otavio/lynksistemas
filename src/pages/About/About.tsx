import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Zap, Award, Code, Palette, Rocket } from "lucide-react";
import "./About.scss";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	const mainRef = useRef<HTMLElement>(null);
	const horizontalRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			// 1. Logo Stroke Draw Animation (Scroll Interactive)
			const logoPath = document.querySelector(".min-lynk-path");
			if (logoPath) {
				gsap.set(logoPath, {
					strokeDasharray: 3000,
					strokeDashoffset: 3000,
					fill: "transparent",
				});

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: ".about-hero",
						start: "top top",
						end: "+=800",
						scrub: 1,
						pin: true,
					},
				});

				tl.to(logoPath, {
					strokeDashoffset: 0,
					ease: "none",
				}).to(logoPath, {
					fill: "var(--primary-blue)",
					stroke: "transparent",
					ease: "power1.inOut",
				});
			}

			// 2. Feature Cards Stagger (Scroll)
			gsap.from(".feature-card", {
				y: 50,
				opacity: 0,
				duration: 0.8,
				stagger: 0.2,
				scrollTrigger: {
					trigger: ".features-grid",
					start: "top 80%",
				},
			});

			// 3. Text Reveal Animation (Scrub)
			const revealText = gsap.utils.toArray(".reveal-text");
			revealText.forEach((text: any) => {
				gsap.fromTo(
					text,
					{ opacity: 0.1, y: 30 },
					{
						opacity: 1,
						y: 0,
						scrollTrigger: {
							trigger: text,
							start: "top 85%",
							end: "top 40%",
							scrub: true,
						},
					},
				);
			});

			// 4. Horizontal Scroll Section (Pinning)
			const panels = gsap.utils.toArray(".horizontal-panel");
			if (panels.length > 0) {
				gsap.to(panels, {
					xPercent: -100 * (panels.length - 1),
					ease: "none",
					scrollTrigger: {
						trigger: ".horizontal-container",
						pin: true,
						scrub: 1,
						snap: 1 / (panels.length - 1),
						end: () => `+=${horizontalRef.current?.offsetWidth || 3000}`,
					},
				});
			}
		},
		{ scope: mainRef },
	);

	return (
		<main className="about-page header-offset" ref={mainRef}>
			{/* Clean Brand Header with Scroll-Interactive SVG Animation */}
			<section
				className="about-hero"
				style={{
					minHeight: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}
			>
				<div className="container">
					<div className="logo-animation-wrapper">
						<svg
							className="animated-logo"
							width="182"
							height="225"
							viewBox="0 0 182 225"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className="min-lynk-path"
								d="M81.5 173.5V114.5C73.1302 110.597 69.5468 106.81 65 97.5V87.5L66 84L40 58L35.5 59.5H26C11.1266 55.4302 6.0825 49.2011 0.5 34V23.5C4.26561 8.22097 10.5806 4.7264 23.5 0.5H38C49.3312 4.88903 54.5707 9.0288 59.5 23V32.5L57 42L82.5 66.5C89.1412 64.9571 93.1537 64.9823 100.5 66.5L126 41L122.5 34V22C126.394 8.91353 131.63 4.61891 144.5 0.5H158C172.539 5.0644 178.019 10.319 181.5 26V32.5C177.221 46.5866 172.991 54.5642 154.5 59.5H147.5L142 58L116.5 84L117.5 87.5V97.5C113.694 107.059 110.231 111.179 102.5 114.5V173.5C112.743 178.418 116.58 183.078 119.5 195V202.5C115.523 217.741 109.65 222.109 95 224.5H89C75.439 221.429 70.4135 216.791 65.5 204V194C67.5648 182.044 72.548 178.494 81.5 173.5Z"
								stroke="var(--primary-blue)"
								strokeWidth="3"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
					<div
						className="about-header"
						style={{ marginTop: "40px", textAlign: "center" }}
					>
						<h2>Nós somos a Lynk Sistemas</h2>
						<p
							style={{
								maxWidth: "700px",
								margin: "16px auto 0",
								fontSize: "1.25rem",
								color: "var(--text-muted)",
							}}
						>
							Conectando a sua ideia à nossa realidade.
						</p>
					</div>
				</div>
			</section>

			{/* Rich Content Details */}
			<section className="about-details section-padding">
				<div className="container">
					<div className="features-grid">
						<div className="feature-card">
							<Code className="feature-icon" size={40} />
							<h3>Engenharia de Software</h3>
							<p>
								Desenvolvemos plataformas escaláveis e de alta disponibilidade
								usando arquiteturas modernas que nunca te deixam na mão.
							</p>
						</div>
						<div className="feature-card">
							<Palette className="feature-icon" size={40} />
							<h3>Design de Conversão</h3>
							<p>
								Interfaces pensadas milímetro a milímetro. Unimos UI visualmente
								deslumbrante com UX projetado para rentabilidade máxima.
							</p>
						</div>
						<div className="feature-card">
							<Rocket className="feature-icon" size={40} />
							<h3>Escala Acelerada</h3>
							<p>
								Nossa entrega não termina no deploy. Estruturamos fundações
								sólidas de SEO e código voltadas para o crescimento agressivo
								orgânico e pago.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Horizontal Timeline / Values */}
			<section className="horizontal-container">
				<div className="horizontal-wrapper" ref={horizontalRef}>
					<div className="horizontal-panel panel-1">
						<Target
							size={80}
							style={{ marginBottom: "24px" }}
							className="text-highlight"
						/>
						<h2>
							Foco Absoluto em <br />
							<span className="text-highlight">Conversão</span>
						</h2>
					</div>
					<div className="horizontal-panel panel-2">
						<Zap
							size={80}
							style={{ marginBottom: "24px" }}
							className="text-highlight"
						/>
						<h2>
							Alta <br />
							<span className="text-highlight">Performance</span>
						</h2>
					</div>
					<div className="horizontal-panel panel-3">
						<Award
							size={80}
							style={{ marginBottom: "24px" }}
							className="text-highlight"
						/>
						<h2>
							Design <span className="text-highlight">Vencedor</span>
						</h2>
					</div>
				</div>
			</section>

			<section
				className="about-content section-padding"
				style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}
			>
				<div className="container">
					<div className="text-large reveal-text">
						Nossa missão é acelerar de forma vitalícia a sua operação através de
						ecossistemas maduros, implacáveis e ultra confiáveis.
					</div>
					<div
						className="text-large reveal-text"
						style={{ marginTop: "40px", color: "var(--primary-blue)" }}
					>
						Bem-vindo ao próximo nível.
					</div>
				</div>
			</section>
		</main>
	);
};

export default About;
