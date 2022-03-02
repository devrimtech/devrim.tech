import { posts } from "../../components/scripts/getAllPosts";
import { Post } from "./post";

export function IndexPage() {
  return (
    <>
      {posts.map((post: any) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
}
