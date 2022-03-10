import Image from 'next/image';
import Link from 'next/link';
import '../../styles/header.module.css';
export const Header = () => {
	return (
		<div className="header content">
			<Image alt="Kai" src='/Kai.jpg' width="150" height="150" />
			<h2> Hello! My name is </h2>
			<h1> Kai Devrim McCormick </h1>
			<p> Student • Really Bad Hacker • He/Him </p>
			<Link href="/penguin" > I also REALLY love penguins </Link>
		</div>
	)
}

export default Header;
