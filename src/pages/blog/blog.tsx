import { Fragment, h } from 'preact';
import posts from './posts/posts.json';

type Props = {
	path?: string;
};

const Blog = ({ }: Props) => (
	<Fragment>
		<header>
			<h1>My Blog!</h1>
		</header>

		<ul>
			{posts.map(item => (
				<li key={item.id}>
					<a href={`/post/${item.id}/${item.slug}`}>{item.title}</a> -{' '}
					<em>{new Date(item.date).toLocaleString()}</em>
				</li>
			))}
		</ul>
	</Fragment>
);
Blog.displayName = 'Blog';

export default Blog;
