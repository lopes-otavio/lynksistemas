import { ArrowRight, MessageCircle } from "lucide-react";
import "./CallToAction.scss";

const WHATSAPP_URL =
	"https://wa.me/5545999666167?text=Olá! Gostaria de saber mais sobre os serviços da Lynk Sistemas.";

const CallToAction = () => {
	return (
		<section className="cta-section">
			<div className="container">
				<div className="cta-content">
					<h2>
						Pronto para levar sua empresa ao{" "}
						<span className="highlight">próximo nível?</span>
					</h2>
					<p>
						Converse com nosso time de especialistas e descubra como podemos
						acelerar seus resultados com tecnologia de ponta.
					</p>
					<a
						href={WHATSAPP_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-cta btn-lg"
					>
						<MessageCircle size={20} />
						Falar com Especialista
						<ArrowRight size={18} />
					</a>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
