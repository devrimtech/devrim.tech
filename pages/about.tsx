import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Header from '../components/header/header';
import Webring from '../components/webring/webring';
import '../styles/about.module.css';
export default function About({ source }: any) {
	return (
		<div className="content">
			<Header />
			<MDXRemote {...source} />
			<Webring />
		</div>
	)
}

const getStaticProps = async ({ params }: any) => {
	const source = fs.readFileSync('./about.dx')

	const { content, data } = matter(source)

	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		scope: data,
	})

	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	}
}
