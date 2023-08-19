import { Characters } from "@/app/models/characters";

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
    <div>
      <h1>This is the data fetched by id</h1>

      <p>Post ID: {postId}</p>
    </div>
  );
}
