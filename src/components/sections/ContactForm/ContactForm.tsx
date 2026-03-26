import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import "./ContactForm.scss";

type FormStatus = "idle" | "sending" | "success" | "error";

const ContactForm = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [status, setStatus] = useState<FormStatus>("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!formRef.current) return;

		setStatus("sending");

		try {
			await emailjs.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				formRef.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			);
			setStatus("success");
			formRef.current.reset();
			setTimeout(() => setStatus("idle"), 5000);
		} catch {
			setStatus("error");
			setTimeout(() => setStatus("idle"), 5000);
		}
	};

	return (
		<section className="contact-section section-padding" id="contato">
			<div className="container">
				<div className="contact-wrapper">
					<div className="contact-info">
						<span className="section-badge">Contato</span>
						<h2>
							Vamos transformar sua
							<span className="highlight"> ideia em realidade?</span>
						</h2>
						<p>
							Preencha o formulário e nossa equipe entrará em contato com você o
							mais rápido possível para entender sua necessidade e apresentar a
							melhor solução.
						</p>

						<div className="contact-details">
							<div className="contact-item">
								<div className="contact-icon">✉</div>
								<div>
									<span className="label">E-mail</span>
									<span className="value">contato@lynksistemas.com.br</span>
								</div>
							</div>
							<div className="contact-item">
								<div className="contact-icon">📱</div>
								<div>
									<span className="label">WhatsApp</span>
									<span className="value">(45) 99966-6167</span>
								</div>
							</div>
						</div>
					</div>

					<form ref={formRef} onSubmit={handleSubmit} className="contact-form">
						<div className="form-row">
							<div className="form-group">
								<label htmlFor="from_name">Nome completo</label>
								<input
									type="text"
									id="from_name"
									name="from_name"
									placeholder="Seu nome"
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="from_email">E-mail</label>
								<input
									type="email"
									id="from_email"
									name="from_email"
									placeholder="seu@email.com"
									required
								/>
							</div>
						</div>

						<div className="form-row">
							<div className="form-group">
								<label htmlFor="phone">Telefone</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									placeholder="(00) 00000-0000"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="company">Empresa</label>
								<input
									type="text"
									id="company"
									name="company"
									placeholder="Nome da empresa"
								/>
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="service">Serviço de interesse</label>
							<select id="service" name="service" required>
								<option value="">Selecione um serviço</option>
								<option value="E-commerce">E-commerce</option>
								<option value="Site Institucional">Site Institucional</option>
								<option value="Sistema Web">Sistema Web</option>
								<option value="Portfólio">Portfólio</option>
								<option value="Blog / Notícias">Blog / Notícias</option>
								<option value="Landing Page">Landing Page</option>
								<option value="Outro">Outro</option>
							</select>
						</div>

						<div className="form-group">
							<label htmlFor="message">Mensagem</label>
							<textarea
								id="message"
								name="message"
								rows={4}
								placeholder="Descreva brevemente o que você precisa..."
								required
							/>
						</div>

						<button
							type="submit"
							className={`btn-submit ${status}`}
							disabled={status === "sending" || status === "success"}
						>
							{status === "idle" && (
								<>
									<Send size={18} /> Enviar mensagem
								</>
							)}
							{status === "sending" && (
								<>
									<span className="spinner" /> Enviando...
								</>
							)}
							{status === "success" && (
								<>
									<CheckCircle size={18} /> Enviado com sucesso!
								</>
							)}
							{status === "error" && (
								<>
									<AlertCircle size={18} /> Erro ao enviar. Tente novamente.
								</>
							)}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
