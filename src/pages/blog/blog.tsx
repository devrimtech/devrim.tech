import GetAllPosts from '../../components/scripts/GetAllPosts';
export default function Blog(props: any) {
	return (

	)
}

function getFiles(props: any) {
	const myList = (
		<ul>{GetAllPosts('').map((item, i) => <li key={item + i}>{item}</li>)}</ul>
	)
}
