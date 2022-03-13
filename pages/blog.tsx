import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
export default function Blog({ posts }: any) {
  return (
    <div className="blog-root pages">
      {posts.map((post: any, index: any) => (
        <Link href={"/blog/" + post.slug} passHref key={index}>
          <div className="blog-details">
            <header>{post.frontMatter.title}</header>
            <section>{post.frontMatter.description}</section>
            <footer>{post.frontMatter.date}</footer>
            <hr />
          </div>
        </Link>
      ))}
    </div>
  );
}
export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};
