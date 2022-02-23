import { FunctionalComponent as FunctionComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';


const themeBtn: FunctionComponent = () => {
	const [theme, setTheme] = useState("");

	useEffect(() => {
		let localTheme: any = window.localStorage.getItem("theme");
		setTheme(localTheme);
		console.log(localTheme);
	}, []);

	const switchTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		window.localStorage.setItem("theme", newTheme);
		setTheme(newTheme);
		console.log(newTheme);
		console.log(window.localStorage.getItem("theme"));
	};

	return (
		<button onClick={switchTheme}>
			{theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
		</button>
	)
}

export default themeBtn;
