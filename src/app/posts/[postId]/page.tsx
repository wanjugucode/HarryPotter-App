import { Characters } from "@/app/models/characters";
import "tailwindcss/tailwind.css";

const getPost = async (id: string): Promise<Characters> => {
  const data = await fetch(`https://hp-api.onrender.com/api/character/${id}`);
  const posts = await data.json();
  return posts;
};
export default async function PostPage({
  params: { postId },
}: {
  params: {
    postId: string;
  };
}) {
  const posts = await getPost(postId);

  console.log(posts); 

  return (
    <div>
      <p className="justify-center items-center">Character ID:{postId}</p>
     

      <div className="max-w-3xl mx-auto my-3 p-4 mt-20">
        <div className="w-full lg:w-5/6 mx-auto flex flex-col lg:flex-row justify-center items-center border rounded-lg shadow-lg bg-white p-8 ">
          <div className="lg:w-auto w-full bg-cover rounded-t lg:rounded-l text-center overflow-hidden lg:flex lg:flex-col justify-center items-center lg:w-1/3 p-4">
            <img
              src="https://ik.imagekit.io/hpapi/harry.jpg"
              alt=""
              className="mx-auto w-96 h-96 lg:w-auto lg:h-auto"
            />
          </div>

          <div className="lg:w-2/3 w-full rounded-b lg:rounded-r p-4 lg:flex lg:flex-col justify-center items-center">
            <div className="mb-4 justify-center items-center">
              <div className="text-gray-900 font-bold text-xl mb-1">
                Anastasia Karobia {posts.name}
              </div>
              <table className="table-auto border mt-1">
                <tbody>
                  <tr className="border w-[600px]">
                    <td className="border px-2 py-2 text-left">Lorem ipsum </td>
                    <td className="border px-2 py-2 text-left">Gryffindor</td>
                  </tr>
                  <tr className="border w-[600px]">
                    <td className="border px-2 py-2 text-left">Lorem ipsum </td>
                    <td className="border px-2 py-2 text-left">
                      dragon heartstring
                    </td>
                  </tr>
                  <tr className="border w-[600px]">
                    <td className="border px-2 py-2 text-left">
                      Lorem ipsum dolo
                    </td>
                    <td className="border px-2 py-2 text-left">Lorem ipsum</td>
                  </tr>
                  <tr className="border w-[600px]">
                    <td className="border px-2 py-2 text-left">
                      Lorem ipsum dolo
                    </td>
                    <td className="border px-2 py-2 text-left">Lorem ipsum</td>
                  </tr>
                  <tr className="border w-[600px]">
                    <td className="border px-2 py-2 text-left">
                      Lorem ipsum dolo
                    </td>
                    <td className="border px-2 py-2 text-left">Lorem ipsum</td>
                  </tr>
                  <tr className="border w-[600px]">
                    <td className="border px-2 py-2 text-left">
                      Lorem ipsum dolo
                    </td>
                    <td className="border px-2 py-2 text-left">Lorem ipsum</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
