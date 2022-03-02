import { HeadPost } from './headpost'

export default function BlogPost({ children, meta }: any) {
	return (
		<>
			<HeadPost meta={meta} isBlogPost />
			<article>{children}</article>
		</>
	)
}
