// app/posts/[postId]/page.tsx

import { Characters } from "@/app/models/characters";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// params: {
//   postId: aksdjlkjasd
// }

const getPost = async (id: string): Promise<Characters> => {
  const data = await fetch(`https://hp-api.onrender.com/api/character/:id/`);
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
      <h1>{post.name}</h1>
      <p>Post ID: {postId}</p>
      {/* <p>{post.body}</p> */}
    </div>
  );
}
