import About from './about/about';
import Header from './header/header';
export const Home = (props: any) => {
	return (
		<>
			<main className="home">
				<Header />
				<About />
				{/* 			<Webring /> */}
			</main>
			<br /><br /><br />
		</>
	)
}

export default Home;
