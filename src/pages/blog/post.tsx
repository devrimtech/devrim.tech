import { Link } from "wouter-preact"
import { HeadPost } from './headpost'

export const Post = ({ post }: any) => {
	const {
		link,
		module: { meta },
	} = post

	return (
		<article>
			<HeadPost meta={meta} />
			<Link href={'/blog' + link}>
				<a>Read more →</a>
			</Link>
		</article>
	)
}
