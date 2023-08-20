import { Post } from "@/lib/types";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const getPost = async (id: string): Promise<Post> => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await data.json();

  return post;
};

export default async function PostPage({
  params: { postId },
}: {
  params: {
    postId: string;
  };
}) {
  const post = await getPost(postId);
  return (
    <div className={inter.className}>
     <Link href={`/pages/${post.id}`}></Link>  <h1>{post.title}</h1>
      <p>Post ID: {postId}</p>
      <p>{post.body}</p>
    </div>
  );
}

