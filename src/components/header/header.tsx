import Kai from '../../../public/Kai.jpg';
export const Header = () => {
	return (
		<div className="header content" style="padding-top: 20px">
			<img src={Kai} style="width: 150px; box-shadow: 5px 5px #555;" />
			<h2> Hello! My name is </h2>
			<h1> Kai Devrim McCormick </h1>
			<p> Student • Really Bad Hacker • Opinionated </p>
			<a href="/penguin" > I also REALLY love penguins </a>
		</div>
	)
}

export default Header;
