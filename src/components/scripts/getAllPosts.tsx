function importAll(r: any) {
	return r.keys().map((fileName: string) => ({
		link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
		module: r(fileName)
	}));
}

export const posts = importAll(
	import.meta.glob("../../pages/posts/*.mdx")
);
