import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import _ from "lodash";
export default function Blog({ posts }: any) {
  return (
    <>
      <div className="blog-root pages">
        {posts.map((post: any, index: any) => (
          <Link href={"/blog/" + post.slug} passHref key={index}>
            <div className="blog-details">
              <header>{post.frontMatter.title}</header>
              <section>{post.frontMatter.description}</section>
              <time>
                Estimated Reading Time: {post.frontMatter.time} minutes
              </time>
              <footer>{post.frontMatter.date}</footer>
              <hr />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  let posts = files.map((filename) => {
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
  let newPosts: any = _.remove(posts, (post) => {
    return post.frontMatter.visibility === "public";
  });
  posts = _.reverse(_.sortBy(newPosts, (post) => post.frontMatter.date));

  return {
    props: {
      posts,
    },
  };
};
