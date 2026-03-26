import { casesData } from "../../data/cases";
import { ArrowRight } from "lucide-react";
import "./Cases.scss";

const Cases = () => {
	return (
		<div className="cases-page header-offset">
			<div
				className="container"
				style={{ paddingTop: "80px", paddingBottom: "40px" }}
			>
				<div
					className="cases-header"
					style={{ marginBlock: "60px", textAlign: "center" }}
				>
					<h2
						style={{
							fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
							color: "var(--dark-navy)",
							marginBottom: "16px",
							lineHeight: "1.2",
						}}
					>
						Nossos Cases de <span className="text-highlight">Sucesso</span>
					</h2>
					<p
						style={{
							fontSize: "1.125rem",
							color: "var(--text-muted)",
							maxWidth: "600px",
							margin: "0 auto",
							lineHeight: "1.5",
						}}
					>
						Descubra como transformamos negócios através de tecnologia e design
						estratégico.
					</p>
				</div>
			</div>

			<div className="cases-list" style={{ paddingBottom: "120px" }}>
				<div className="container">
					{casesData.map((project, index) => (
						<div
							className={`case-row ${index % 2 !== 0 ? "reverse" : ""}`}
							key={project.id}
						>
							<div className="case-row-image">
								<img src={project.image} alt={project.title} />
							</div>
							<div className="case-row-content">
								<div className="case-tags">
									{project.tags.map((tag) => (
										<span key={tag} className="case-tag">
											{tag}
										</span>
									))}
								</div>
								<h2>{project.title}</h2>
								<p>{project.longDescription}</p>
								<ul className="case-results-preview">
									{project.results.slice(0, 2).map((res, i) => (
										<li key={i}>{res}</li>
									))}
								</ul>
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary mt-4"
								>
									Conhecer case <ArrowRight size={16} />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Cases;
