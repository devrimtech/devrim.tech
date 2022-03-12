import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
export default function Blog({ posts }: any) {
  return (
    <div>
      {posts.map((post: any, index: any) => (
        <Link href={"/blog/" + post.slug} passHref key={index}>
          <div style={{ maxWidth: "540px" }}>
            <div>
              <div>
                <div>
                  <h5>{post.frontMatter.title}</h5>
                  <p>{post.frontMatter.description}</p>
                  <p>
                    <small>{post.frontMatter.date}</small>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src={post.frontMatter.thumbnailUrl}
                  alt="thumbnail"
                  width={500}
                  height={400}
                  objectFit="cover"
                />
              </div>
            </div>
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
