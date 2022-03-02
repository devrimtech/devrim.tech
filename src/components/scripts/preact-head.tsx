import { Component, h } from "preact";
import Portal from 'preact-portal';
export default class HeadTag extends Component {
	componentDidMount() {
		this.setState({ isClient: true });

		const ssrTag = document.head.querySelector("[data-pht]");
		if (ssrTag) {
			ssrTag.remove();
		}
	}
	render({ tag: Tag, ...rest }: any, { isClient }: any) {
		if (isClient) {
			return (
				<Portal into="head">
					<Tag {...rest} />
				</Portal>
			);
		}
		if (this.context.head) {
			this.context.head.add(<Tag data-pht {...rest} />);
		}
	}
}

export const Title = (props: any) => <HeadTag tag="title" {...props} />;
export const Style = (props: any) => <HeadTag tag="style" {...props} />;
export const Meta = (props: any) => <HeadTag tag="meta" {...props} />;
export const Link = (props: any) => <HeadTag tag="link" {...props} />;
