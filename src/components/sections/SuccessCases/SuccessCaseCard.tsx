import { ArrowRight } from "lucide-react";

export interface SuccessCaseProps {
	project: {
		id: string;
		title: string;
		description: string;
		image: string;
		tags: string[];
		link: string;
	};
}

const SuccessCaseCard = ({ project }: SuccessCaseProps) => {
	return (
		<div className="case-card">
			<div className="case-image-wrapper">
				<img src={project.image} alt={project.title} className="case-image" />
			</div>

			<div className="case-content">
				<div className="case-tags">
					{project.tags.map((tag, tagIndex) => (
						<span key={tagIndex} className="case-tag">
							{tag}
						</span>
					))}
				</div>

				<h3>{project.title}</h3>
				<p className="case-description">{project.description}</p>

				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					className="case-link"
				>
					Conhecer case
					<ArrowRight size={16} />
				</a>
			</div>
		</div>
	);
};

export default SuccessCaseCard;
