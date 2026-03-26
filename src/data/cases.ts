import kaloriImg from "../assets/cases/kalori-ai.png";
import futureCoImg from "../assets/cases/futureco.png";
import endopeakImg from "../assets/cases/endopeak.png";
import prostadineImg from "../assets/cases/prostadine.png";

export interface CaseType {
	id: string;
	title: string;
	description: string;
	longDescription: string;
	image: string;
	tags: string[];
	link: string;
	client: string;
	duration: string;
	services: string[];
	results: string[];
}

export const casesData: CaseType[] = [
	{
		id: "kalori-ai",
		title: "Kalori AI",
		description:
			"Desenvolvimento de aplicativo de nutrição inteligente com rastreamento por IA, jejum intermitente e metas personalizadas.",
		longDescription:
			"A Kalori AI nos procurou com um desafio ousado: criar um ecossistema completo de saúde hiper-personalizado através de IA. Nossa equipe de engenharia e UX elaborou um aplicativo robusto, com algoritmos de recomendação e visual limpo focado na retenção e conversão do usuário diário.",
		image: kaloriImg,
		tags: ["App", "IA", "Saúde"],
		link: "https://aikalori.com/",
		client: "Kalori Health Tech",
		duration: "5 Meses",
		services: [
			"UI/UX Prototyping",
			"Desenvolvimento Mobile",
			"API Integration",
		],
		results: [
			"+10k downloads no 1º mês",
			"Taxa de retenção 45% maior que a média do mercado",
		],
	},
	{
		id: "future-co",
		title: "Future Co",
		description:
			"Criação do site institucional e identidade digital para agência de marketing 360° com foco em conversão.",
		longDescription:
			"A Future Co precisava transmitir autoridade internacional e dinamismo em sua comunicação B2B. Construímos um portal corporativo com CMS amigável, aplicando regras de SEO técnico avançado e animações dinâmicas de passagem de tela para instigar os visitantes.",
		image: futureCoImg,
		tags: ["Site Institucional", "Marketing", "WordPress"],
		link: "https://futureco.online/",
		client: "Future Co Digital",
		duration: "8 Semanas",
		services: [
			"Design de Interface",
			"Desenvolvimento Front-end",
			"Otimização SEO",
		],
		results: [
			"Aumento de 200% em leads qualificados",
			"Velocidade de carregamento reduzida em 60%",
		],
	},
	{
		id: "endopeak",
		title: "EndoPeak",
		description:
			"Landing page de alta conversão para suplemento masculino com funil de vendas otimizado e CRO avançado.",
		longDescription:
			"No tenso universo de Landing Pages competitivas (Niche Health), o EndoPeak se destacou através de uma estrutura de persuasão linear e design imersivo. Cada seção da página foi desenhada usando dados psicométricos para alavancar a confiança e a conversão.",
		image: endopeakImg,
		tags: ["Landing Page", "Saúde", "CRO"],
		link: "https://healthylivingarea.com/endopeak/",
		client: "Healthy Living Area",
		duration: "3 Semanas",
		services: ["Copywriting Visual", "Web Design", "Testes A/B (A/B Testing)"],
		results: [
			"Taxa de conversão recorde de 6.4%",
			"ROI imediato dobrado no tráfego pago",
		],
	},
	{
		id: "prostadine",
		title: "Prostadine",
		description:
			"Desenvolvimento de página de vendas focada em conversão com design profissional e copy persuasiva.",
		longDescription:
			"A Prostadine demandava uma comunicação extremamente clara e segura para seus clientes. Priorizamos credibilidade e elementos de prova social em uma Landing Page técnica, rápida e totalmente otimizada para tráfego mobile, a principal fonte orgânica de seus prospects.",
		image: prostadineImg,
		tags: ["Landing Page", "Saúde", "Copywriting"],
		link: "https://healthylivingarea.com/prostadine/",
		client: "Healthy Living Area",
		duration: "4 Semanas",
		services: [
			"Design de Interface UI",
			"Otimização Mobile First",
			"Desenvolvimento",
		],
		results: [
			"Tempo de permanência na página +30%",
			"Redução expressiva no custo por aquisição (CPA)",
		],
	},
];
