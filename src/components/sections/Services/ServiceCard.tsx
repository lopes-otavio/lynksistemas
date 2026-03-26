import type { ReactNode } from "react";

export interface ServiceCardProps {
	icon: ReactNode;
	title: string;
	description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
	return (
		<div className="service-card">
			<div className="icon-wrapper">{icon}</div>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};

export default ServiceCard;
