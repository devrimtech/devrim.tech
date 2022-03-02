import { Fragment, h } from 'preact';
import posts from './posts/posts.json';

type Props = {
	path?: string;
};

const Home = ({ }: Props) => (
	<Fragment>
		<header>
			<h1>This is my blog!</h1>
			<h2>Small descriptive text describing stuff.</h2>
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
Home.displayName = 'Home';

export default Home;
