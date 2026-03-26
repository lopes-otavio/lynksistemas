import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SuccessCaseCard from "./SuccessCaseCard";
import "./SuccessCases.scss";

gsap.registerPlugin(ScrollTrigger);

// Case images
import { casesData } from "../../../data/cases";

const SuccessCases = () => {
	const sectionRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			gsap.fromTo(
				".cases-header",
				{ y: 30, opacity: 0 },
				{
					scrollTrigger: {
						trigger: ".cases-header",
						start: "top 85%",
					},
					y: 0,
					opacity: 1,
					duration: 0.8,
					ease: "power2.out",
				},
			);

			gsap.fromTo(
				".case-card",
				{ y: 50, opacity: 0 },
				{
					scrollTrigger: {
						trigger: ".cases-grid",
						start: "top 85%",
					},
					y: 0,
					opacity: 1,
					duration: 0.8,
					stagger: 0.15,
					ease: "power2.out",
				},
			);

			gsap.fromTo(
				".cases-action",
				{ y: 20, opacity: 0 },
				{
					scrollTrigger: {
						trigger: ".cases-action",
						start: "top 90%",
					},
					y: 0,
					opacity: 1,
					duration: 0.6,
					ease: "power2.out",
				},
			);
		},
		{ scope: sectionRef },
	);

	return (
		<section className="cases-section section-padding" ref={sectionRef}>
			<div className="container">
				<div className="cases-header">
					<h2>Cases de Sucesso</h2>
					<p>Resultados que falam por si.</p>
				</div>

				<div className="cases-grid">
					{casesData.map((project, index) => (
						<SuccessCaseCard key={index} project={project} />
					))}
				</div>

				<div
					className="cases-action"
					style={{ textAlign: "center", marginTop: "60px" }}
				>
					<a href="/cases" className="btn btn-primary">
						Ver todos os projetos
					</a>
				</div>
			</div>
		</section>
	);
};

export default SuccessCases;
