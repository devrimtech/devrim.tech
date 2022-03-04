import { MDXProvider } from "@mdx-js/preact";
import AboutMDX from './about.mdx';
export const About = () => {
	return (
		<div>
			<MDXProvider components={{}}>
				<AboutMDX />
			</MDXProvider>
		</div>
	)
}

export default About;
