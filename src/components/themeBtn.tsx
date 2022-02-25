import { FunctionalComponent as FunctionComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

function oppositeOf(input: string) {
	if (input === "dark") {
		return "🌞";
	}
	else if (input === "light") {
		return "🌚";
	}
}
const themeBtn: FunctionComponent = () => {
	const [theme, setTheme] = useState("");

	useEffect(() => {
		let localTheme: any = window.localStorage.getItem("theme");
		setTheme(localTheme);
	}, []);

	const switchTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		window.localStorage.setItem("theme", newTheme);
		setTheme(newTheme);
		const app: any = document.getElementById('app');
		app.dataset.theme = theme;
	};

	return (
		<button onClick={switchTheme}>
			{theme === "light" ? oppositeOf("light") : oppositeOf("dark")}
		</button>
	)
}

export default themeBtn;
