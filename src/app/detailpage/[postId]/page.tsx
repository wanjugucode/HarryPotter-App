import { Characters } from "src/app/models/characters";
import "tailwindcss/tailwind.css";
import Styles from "../../styles/styles.module.css";
const getPost = async (id: string): Promise<Characters> => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const character = await data.json();

  return character;
};

export default async function PostPage({
  params: { postId },
}: {
  params: {
    postId: string;
  };
}) {
  const character = await getPost(postId);
  return (

    <div className={`grid ${Styles.customGrid} mt-16`}>
      <p className=" flex justify-center items-center">Character Id:{postId}</p>
      <div className="center-content-tablet center-content-mobile flex justify-center items-center"> {/* Center on tablet and mobile */}
        <div className="w-70 max-w-lg rounded overflow-hidden shadow-lg">
          <div className="relative">
    
            <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
          </div>
          <div className="px-6 py-4">
          <table className="mt-4 w-full border">
          <thead>
<h1>{character.name}</h1>
          </thead>
          <tbody  >
                  <tr className="border w-[600px]">
                    <td className="border px-2 py-2 text-left">House </td>
                    <td className="border px-2 py-2 text-left">
                      {character.house}  
                    </td>
                  </tr>
                  <tr className="border w-[600px]">
                    <td className="border px-2 py-2 text-left">
                      Date Of Birth 
                    </td>
                    <td className="border px-2 py-2 text-left">
                      {character.dateOfBirth}     Date Of Birth    Date Of Birth 
                    </td>
                  </tr>
                  <tr className="border w-[600px]">
                    <td className="border px-2 py-2 text-left">Actor</td>
                    <td className="border px-2 py-2 text-left">
                      {character.actor}
                    </td>
                  </tr>
                  <tr className="border w-[600px]">
                    <td className="border px-2 py-2 text-left">EyeColor</td>
                    <td className="border px-2 py-2 text-left">
                      {character.eyeColour}
                    </td>
                  </tr>
                  <tr className="border w-[600px]">
                    <td className="border px-2 py-2 text-left">HairColor</td>
                    <td className="border px-2 py-2 text-left">
                      {character.hairColour}
                    </td>
                  </tr>
                  <tr className="border w-[600px]">
                    <td className="border px-2 py-2 text-left">Alive</td>
                    <td className="border px-2 py-2 text-left">
                      {character.alive}
                    </td>
                  </tr>
                </tbody>
        </table>
         </div>

      </div>
    </div>
    </div>
  
    )
}
