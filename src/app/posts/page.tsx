import { Characters } from "../models/characters";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const getPosts = async (): Promise<Characters[]> => {
  const data = await fetch("https://hp-api.onrender.com/api/characters");
  const posts = await data.json();

  return posts;
};

export default async function Posts() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div className={inter.className}>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
           <Link href={"/posts/"+post.id}>{post.name}</Link>
      
        ))}
      </ul>
    </div>
  );
}
