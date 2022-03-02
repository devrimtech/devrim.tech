import { HeadPost } from './headpost'

export function BlogPost({ children, meta }: any) {
	return (
		<>
			<HeadPost meta={meta} isBlogPost />
			<article>{children}</article>
		</>
	)
}
