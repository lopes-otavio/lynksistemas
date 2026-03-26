import {
	ShoppingCart,
	Server,
	MonitorSmartphone,
	PenTool,
	LayoutTemplate,
	LifeBuoy,
	Zap,
	Shield,
	TrendingUp,
} from "lucide-react";

export interface ServiceData {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	image: string;
	icon: any;
	benefits: { title: string; text: string; icon?: any }[];
	technologies: string[];
}

export const servicesData: Record<string, ServiceData> = {
	"e-commerce": {
		id: "e-commerce",
		title: "E-Commerce",
		subtitle: "Vendas automáticas 24 horas por dia.",
		description:
			"Construímos operações de e-commerce implacáveis, unindo um design voltado para conversão com arquiteturas robustas para processamento massivo de vendas.",
		image:
			"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
		icon: ShoppingCart,
		benefits: [
			{
				title: "Alta Conversão",
				text: "UX/UI focado em encurtar a jornada de compra e maximizar o checkout.",
				icon: TrendingUp,
			},
			{
				title: "Escalabilidade",
				text: "Infraestrutura flexível que cresce acompanhando seu faturamento sem travamentos.",
				icon: Server,
			},
			{
				title: "Integrações",
				text: "Integração nativa com ERPs, meios de pagamento e marketing automation.",
				icon: Zap,
			},
		],
		technologies: ["VTEX", "Shopify", "NuvemShop"],
	},
	"site-institucional": {
		id: "site-institucional",
		title: "Sites Institucionais",
		subtitle: "Sua marca posicionada como autoridade.",
		description:
			"Desenvolvemos plataformas corporativas exclusivas que comunicam sua essência com profissionalismo e convertem visitantes em leads ultra qualificados.",
		image:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
		icon: LayoutTemplate,
		benefits: [
			{
				title: "Velocidade Extrema",
				text: "Código otimizado para carregamento instantâneo, dominando o ranking do Google.",
				icon: Zap,
			},
			{
				title: "Design Premium",
				text: "Interfaces sob medida desenhadas estrategicamente para o seu ICP (Ideal Customer Profile).",
				icon: PenTool,
			},
			{
				title: "Responsividade Absoluta",
				text: "Experiência pixel-perfect em computadores, tablets e smartphones de qualquer tamanho.",
				icon: MonitorSmartphone,
			},
		],
		technologies: ["React", "Angular", "Next.js", "WordPress"],
	},
	"sistemas-sob-medida": {
		id: "sistemas-sob-medida",
		title: "Sistemas Sob Medida",
		subtitle: "Software tracionado exclusivamente para a sua operação.",
		description:
			"Criamos sistemas web complexos, CRMs, painéis de gestão e aplicativos que automatizam processos pesados e reduzem drasticamente o seu custo operacional.",
		image:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
		icon: Server,
		benefits: [
			{
				title: "Automatização",
				text: "Ganhe centenas de horas de produtividade digitalizando hard-processos manuais.",
				icon: Zap,
			},
			{
				title: "Segurança Total",
				text: "Criptografia de ponta a ponta nativa nos bancos de dados para total tranquilidade.",
				icon: Shield,
			},
			{
				title: "Código Escalável",
				text: "Arquitetura limpa preparada para receber múltiplos módulos adicionais com o tempo.",
				icon: TrendingUp,
			},
		],
		technologies: [
			"React",
			"Angular",
			"Next.js",
			"PostgreSQL",
			"MongoDB",
			"Node.js",
		],
	},
	portfolio: {
		id: "portfolio",
		title: "Portfólios",
		subtitle: "A vitrine definitiva para expor o seu talento real.",
		description:
			"Destaque seu talento, agência e currículo criativo através de micro-interações robustas, layout impecável de altíssimo padrão e navegação imersiva.",
		image:
			"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
		icon: PenTool,
		benefits: [
			{
				title: "Visual Clean",
				text: "O foco 100% no seu conteúdo com UI fluida e não invasiva.",
				icon: MonitorSmartphone,
			},
			{
				title: "Fator UAU",
				text: "Animações GSAP que transformam seu portfólio em uma obra de arte.",
				icon: Zap,
			},
		],
		technologies: ["React", "Angular", "Next.js", "WordPress", "GSAP"],
	},
	blog: {
		id: "blog",
		title: "Blogs e Notícias",
		subtitle: "Plataformas de alta distribuição e atração por conteúdo.",
		description:
			"Portais de notícia otimizados fanaticamente para o PageSpeed do Google. Focados em aquisição orgânica severa e tráfego leve.",
		image:
			"https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
		icon: LayoutTemplate,
		benefits: [
			{
				title: "Painel Dinâmico",
				text: "Publicações flexíveis sem depender de manutenção.",
				icon: Shield,
			},
			{
				title: "Performance SEO",
				text: "Código e marcação voltados radicalmente pro Google.",
				icon: TrendingUp,
			},
		],
		technologies: ["React", "Angular", "Next.js", "WordPress"],
	},
	"landing-page": {
		id: "landing-page",
		title: "Landing Pages",
		subtitle: "Páginas táticas focadas em uma única métrica: Venda.",
		description:
			"Construídas com peso mínimo e copy matadora para converter sua mídia paga em faturamento real e baratear enormemente o seu Custo Por Clique.",
		image:
			"https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1200&auto=format&fit=crop",
		icon: TrendingUp,
		benefits: [
			{
				title: "Velocidade",
				text: "Menos de 1 segundo de carregamento.",
				icon: Zap,
			},
			{
				title: "Ação Única",
				text: "Nenhuma distração externa, funil focado e objetivo 100% transacional.",
				icon: ShoppingCart,
			},
		],
		technologies: ["React", "Angular", "Next.js", "WordPress", "GSAP"],
	},
	suporte: {
		id: "suporte",
		title: "Suporte e Evolução",
		subtitle: "Manutenção proativa do seu ecossistema digital.",
		description:
			"Bolsões de horas flexíveis e SLAs hiper transparentes para sustentar a evolução e refatoração da sua infraestrutura web no dia-a-dia.",
		image:
			"https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
		icon: LifeBuoy,
		benefits: [
			{
				title: "Segurança",
				text: "Monitoramento constante da infraestrutura contra vulnerabilidades.",
				icon: Shield,
			},
		],
		technologies: [],
	},
};
