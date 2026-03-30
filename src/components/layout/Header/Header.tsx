import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	MessageCircle,
	ChevronDown,
	Menu,
	X,
	Instagram,
	Linkedin,
	Facebook,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Header.scss";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
	const headerRef = useRef<HTMLElement>(null);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const location = useLocation();

	const socialLinks = [
		{ id: "instagram", url: "#", icon: Instagram, label: "Instagram" },
		{ id: "linkedin", url: "#", icon: Linkedin, label: "LinkedIn" },
		{ id: "facebook", url: "#", icon: Facebook, label: "Facebook" },
	];

	const handleDropdownClick = (e: React.MouseEvent, dropdownName: string) => {
		if (window.innerWidth < 992) {
			e.preventDefault();
			setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
		}
	};

	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [location]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 992 && isMobileMenuOpen) {
				setIsMobileMenuOpen(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isMobileMenuOpen]);

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
						<img
							src="/src/assets/logo-lynk-azul.svg"
							alt="Lynk Sistemas Logo"
							height="40"
						/>
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

				<div
					className={`mobile-sidebar-overlay ${isMobileMenuOpen ? "open" : ""}`}
					onClick={() => setIsMobileMenuOpen(false)}
				></div>

				<div className={`nav-wrapper ${isMobileMenuOpen ? "mobile-open" : ""}`}>
					<div className="mobile-sidebar-header">
						<Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
							<img
								src="/src/assets/logo-lynk-azul.svg"
								alt="Lynk Sistemas Logo"
								height="32"
							/>
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
						<nav className="main-nav">
							<ul>
								<li
									className={`has-dropdown ${openDropdown === "servicos" ? "mobile-dropdown-open" : ""}`}
								>
									<Link
										to="/"
										onClick={(e) => handleDropdownClick(e, "servicos")}
									>
										Serviços <ChevronDown size={14} className="dropdown-icon" />
									</Link>
									<div className="dropdown">
										<Link to="/servicos/e-commerce">E-commerce</Link>
										<Link to="/servicos/site-institucional">
											Sites Institucionais e Blogs
										</Link>
										<Link to="/servicos/sistemas-sob-medida">
											Sistemas Sob Medida
										</Link>
										<Link to="/servicos/portfolio">Portfólios e LPs</Link>
										<Link to="/servicos/suporte">Suporte e Evolução</Link>
									</div>
								</li>
								<li>
									<Link to="/cases">Cases</Link>
								</li>
								<li
									className={`has-dropdown ${openDropdown === "sobre" ? "mobile-dropdown-open" : ""}`}
								>
									<Link
										to="/sobre-nos"
										onClick={(e) => handleDropdownClick(e, "sobre")}
									>
										Sobre Nós{" "}
										<ChevronDown size={14} className="dropdown-icon" />
									</Link>
									<div className="dropdown">
										<Link to="/sobre-nos">A Lynk</Link>
										<Link to="/termos">Termos de Uso</Link>
										<Link to="/privacidade">Política de Privacidade</Link>
									</div>
								</li>
							</ul>
						</nav>
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
			</div>
		</header>
	);
};

export default Header;
