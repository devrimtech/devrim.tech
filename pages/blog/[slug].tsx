import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Prism from "prismjs";
import { useEffect } from "react";
import rehypeImgSize from "rehype-img-size";
import Image from "../../components/blog/image";
import Meta from "../../components/meta/meta";
const components = {
  img: Image,
};

const PostPage = ({
  frontMatter: { title, description, icon },
  mdxSource,
}: any) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Meta title={title} description={description} icon={icon} />
      <div className="content pages blog">
        <h1 className="blog-title">{title}</h1>
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [[rehypeImgSize as any, { dir: "public" }]],
    },
  });
  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export default PostPage;
