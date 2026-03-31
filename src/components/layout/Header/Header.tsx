import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logoLynkAzul from "../../../assets/logo-lynk-azul.svg";
import { Menu, MessageCircle } from "lucide-react";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Header.scss";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
	const headerRef = useRef<HTMLElement>(null);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useGSAP(
		() => {
			ScrollTrigger.create({
				start: "top -50",
				toggleClass: {
					className: "header-scrolled",
					targets: headerRef.current,
				},
			});
		},
		{ scope: headerRef },
	);

	return (
		<header className="site-header" ref={headerRef}>
			<div className="container header-inner">
				<div className="logo">
					<Link to="/">
						<img src={logoLynkAzul} alt="Lynk Sistemas Logo" height="40" />
					</Link>
				</div>

				{!isMobileMenuOpen && (
					<button
						className="mobile-menu-toggle"
						onClick={() => setIsMobileMenuOpen(true)}
						aria-label="Open Menu"
					>
						<Menu size={24} />
					</button>
				)}

				<div className="nav-wrapper desktop">
					<div className="nav-body">
						<Nav />
					</div>
				</div>

				<div className="header-cta desktop">
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

				<MobileMenu
					isMobileMenuOpen={isMobileMenuOpen}
					setIsMobileMenuOpen={setIsMobileMenuOpen}
				/>
			</div>
		</header>
	);
};

export default Header;
