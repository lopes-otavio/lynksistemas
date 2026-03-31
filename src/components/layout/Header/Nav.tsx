import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Nav = () => {
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);

	const handleDropdownClick = (e: React.MouseEvent, dropdownName: string) => {
		if (window.innerWidth < 992) {
			e.preventDefault();
			setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
		}
	};

	return (
		<nav className="main-nav">
			<ul>
				<li
					className={`has-dropdown ${openDropdown === "servicos" ? "mobile-dropdown-open" : ""}`}
				>
					<Link to="/" onClick={(e) => handleDropdownClick(e, "servicos")}>
						Serviços <ChevronDown size={14} className="dropdown-icon" />
					</Link>
					<div className="dropdown">
						<Link to="/servicos/e-commerce">E-commerce</Link>
						<Link to="/servicos/site-institucional">
							Sites Institucionais e Blogs
						</Link>
						<Link to="/servicos/sistemas-sob-medida">Sistemas Sob Medida</Link>
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
						Sobre Nós <ChevronDown size={14} className="dropdown-icon" />
					</Link>
					<div className="dropdown">
						<Link to="/sobre-nos">A Lynk</Link>
						<Link to="/termos">Termos de Uso</Link>
						<Link to="/privacidade">Política de Privacidade</Link>
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
