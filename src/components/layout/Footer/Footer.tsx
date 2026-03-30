import { Instagram, Linkedin, Facebook, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logoLynkBranca from "../../../assets/logo-lynk-branca.svg";
import "./Footer.scss";

const socialLinks = [
	{ icon: Instagram, href: "https://instagram.com/lynksistemas_" },
	{ icon: Linkedin, href: "https://linkedin.com/company/lynksistemas" },
	{
		icon: Facebook,
		href: "https://www.facebook.com/people/Lynk-Sistemas/61582209310631",
	},
];

const aboutLinks = [
	{ label: "A Lynk Sistemas", path: "/sobre-nos" },
	{ label: "Cases de sucesso", path: "/cases" },
	{ label: "Termos de Uso", path: "/termos" },
	{ label: "Política de Privacidade", path: "/privacidade" },
];

const contactLinks = [
	{
		label: "contato@lynksistemas.com.br",
		icon: Mail,
		href: "mailto:contato@lynksistemas.com.br",
	},
	{
		label: "(45) 99966-6167",
		icon: Phone,
		href: "https://wa.me/5545999666167",
	},
];

const bottomLinks = [
	{ label: "Termos de Uso", path: "/termos" },
	{ label: "Política de Privacidade", path: "/privacidade" },
];

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="site-footer">
			<div className="container">
				<div className="footer-top">
					<div className="footer-brand">
						<img
							src={logoLynkBranca}
							alt="Lynk Sistemas"
							className="footer-logo"
						/>
						<p>
							Transformando desafios em soluções digitais inovadoras.
							Especialistas em desenvolvimento web e e-commerce.
						</p>
						<div className="footer-socials">
							{socialLinks.map((social, index) => {
								const Icon = social.icon;
								return (
									<a
										key={index}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="social-link"
									>
										<Icon size={18} />
									</a>
								);
							})}
						</div>
					</div>

					<div className="footer-links-grid">
						<div className="footer-links-column">
							<h4>Sobre</h4>
							<div className="links-list">
								{aboutLinks.map((link, index) => (
									<Link key={index} to={link.path} className="footer-link">
										{link.label}
									</Link>
								))}
							</div>
						</div>
						<div className="footer-links-column">
							<h4>Contato</h4>
							<div className="links-list">
								{contactLinks.map((link, index) => {
									const Icon = link.icon;
									return (
										<a
											key={index}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className="footer-link"
										>
											<Icon size={16} /> {link.label}
										</a>
									);
								})}
							</div>
						</div>
					</div>
				</div>

				<div className="footer-bottom-area">
					<div className="footer-bottom-inner">
						<p>
							&copy; {currentYear} Lynk Sistemas. Todos os direitos reservados.
						</p>
						<div className="bottom-links">
							{bottomLinks.map((link, index) => (
								<Link key={index} to={link.path} className="footer-link">
									{link.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
