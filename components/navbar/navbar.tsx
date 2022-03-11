import Link from "next/link";
export const Navbar = () => {
	return (
		<header className="nav-header">
			<nav className="nav-nav">
				<Link href="/">Kai Devrim</Link>
				<Link href="/blog">Blog</Link>
				<Link href="/resume">Résumé</Link>
				<Link href="/now">Now</Link>
				<Link href="/contact">Contact</Link>
			</nav>
		</header>
	)
}

export default Navbar;