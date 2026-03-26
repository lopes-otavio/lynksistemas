import { useRef } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Header.scss";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
	const headerRef = useRef<HTMLElement>(null);

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

				<nav className="main-nav">
					<ul>
						<li className="has-dropdown">
							<Link to="/">
								Serviços <ChevronDown size={14} />
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
						<li className="has-dropdown">
							<Link to="/sobre-nos">
								Sobre Nós <ChevronDown size={14} />
							</Link>
							<div className="dropdown">
								<Link to="/sobre-nos">A Lynk</Link>
								<Link to="/termos">Termos de Uso</Link>
								<Link to="/privacidade">Política de Privacidade</Link>
							</div>
						</li>
					</ul>
				</nav>

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
			</div>
		</header>
	);
};

export default Header;
