import About from './about/about';
import Header from './header/header';
export const Home = () => {
	return (
		<main className="home">
			<Header />
			<About />
			{/* 			<Webring /> */}
		</main>
	)
}

export default Home;
