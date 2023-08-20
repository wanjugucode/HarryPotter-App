import { Inter } from "next/font/google";
import Link from "next/link";
import { Characters } from "../models/characters";

const inter = Inter({ subsets: ["latin"] });

const getPost = async (id: string): Promise<Characters> => {
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
     <Link href={`/pages/${post.id}`}></Link>
       <h1>{}</h1>
      <p>Post ID: {postId}</p>
      <p>{}</p>
    </div>
  );
}

