import Layout from "./layout";

export default function Blog({ Component, pageProps }: any) {
	return (
		<Layout pageTitle="Blog" description="My Personal Blog">
			<Component {...pageProps} />
		</Layout>
	);
}
