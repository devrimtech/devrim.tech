const { h, Component, render } = preact; /** @jsx h */
const { Router, route } = preactRouter;
import "./navbar.css";
export const navbar = () => (
	<div class="navbar">
		<nav>
			<Router>
				<Home path="/" />
				<Profile path="/profile/:user?" />
				<Error type="404" default />
			</Router>
		</nav>
	</div>
);
