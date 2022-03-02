import NavBar from "../../components/Navbar/Navbar";
import { Meta, Title } from "../../components/scripts/preact-head";
export default function Layout({ children, pageTitle, description }: any) {
	return (
		<>
			<div>
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta charSet="utf-8" />
				<Meta name="Description" content={description}></Meta>
				<Title>{pageTitle}</Title>
			</div>
			<main>
				<NavBar />
				<div className="content">{children}</div>
			</main>
		</>
	);
}
