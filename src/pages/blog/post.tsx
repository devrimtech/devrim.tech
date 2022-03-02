import { h } from 'preact';
import { route } from 'preact-router';
import { useEffect } from 'preact/hooks';
import posts from './posts/posts.json';


type Props = {
	path?: string;
	id?: string;
	slug?: string;
};

const Post = ({ id, slug }: Props) => {
	const post = posts.find(item => item.id === Number(id));

	if (!post || !id) {
		return (
			<div>
				Not found! <a href="/">Back</a>
			</div>
		);
	}

	useEffect(() => {
		if (post && (!slug || slug !== post.slug)) {
			route(`/post/${post.id}/${post.slug}`, true);
		}
	}, []);

	return (
		<div>
			<div dangerouslySetInnerHTML={{ __html: post.contents }} />
			<a href="/">Back</a>
		</div>
	);
};
Post.displayName = 'Post';

export default Post;
