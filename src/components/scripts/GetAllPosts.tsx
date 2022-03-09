import { globby } from 'globby';
export default async function GetAllPosts(dir: any) {
	const files = await globby([dir, '*.mdx']);
	return files;
}
