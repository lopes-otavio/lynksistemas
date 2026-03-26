import {
	Hero,
	Services,
	PlatformPartners,
	CallToAction,
	ClientCarousel,
	SuccessCases,
	ContactForm,
} from "../../components/sections";

const Home = () => {
	return (
		<div className="home-page">
			<Hero />
			<Services />
			<PlatformPartners />
			<CallToAction />
			<ClientCarousel />
			<SuccessCases />
			<ContactForm />
		</div>
	);
};

export default Home;
