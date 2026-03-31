import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, X, Instagram, Linkedin, Facebook } from "lucide-react";
import logoLynkAzul from "../../../assets/logo-lynk-azul.svg";
import Nav from "./Nav";

interface MobileMenuProps {
	isMobileMenuOpen: boolean;
	setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const socialLinks = [
	{ id: "instagram", url: "#", icon: Instagram, label: "Instagram" },
	{ id: "linkedin", url: "#", icon: Linkedin, label: "LinkedIn" },
	{ id: "facebook", url: "#", icon: Facebook, label: "Facebook" },
];

const MobileMenu = ({
	isMobileMenuOpen,
	setIsMobileMenuOpen,
}: MobileMenuProps) => {
	const location = useLocation();

	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [location, setIsMobileMenuOpen]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 992 && isMobileMenuOpen) {
				setIsMobileMenuOpen(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isMobileMenuOpen, setIsMobileMenuOpen]);

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isMobileMenuOpen]);

	return (
		<>
			<div
				className={`mobile-sidebar-overlay ${isMobileMenuOpen ? "open" : ""}`}
				onClick={() => setIsMobileMenuOpen(false)}
			></div>

			<div
				className={`nav-wrapper mobile-only-nav ${isMobileMenuOpen ? "mobile-open" : ""}`}
			>
				<div className="mobile-sidebar-header">
					<Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
						<img src={logoLynkAzul} alt="Lynk Sistemas Logo" height="32" />
					</Link>
					<button
						className="mobile-menu-toggle open"
						onClick={() => setIsMobileMenuOpen(false)}
						aria-label="Close Menu"
					>
						<X size={24} />
					</button>
				</div>
				<div className="nav-body">
					<Nav />
				</div>

				<div className="nav-footer">
					<div className="header-cta">
						<a
							href="https://wa.me/5545999666167?text=Olá! Gostaria de saber mais sobre os serviços da Lynk Sistemas."
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-primary"
						>
							<MessageCircle size={16} />
							Fale conosco
						</a>
					</div>
					<div className="mobile-social-links">
						{socialLinks.map(({ id, url, icon: Icon, label }) => (
							<a
								key={id}
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={label}
							>
								<Icon size={20} />
							</a>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default MobileMenu;
