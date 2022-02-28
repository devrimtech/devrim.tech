import About from './about/about';
import Header from './header/header';
export const Home = () => {
	return (
		<div className="home">
			<Header />
			<About />
			{/* 			<Webring /> */}
		</div>
	)
}

export default Home;
