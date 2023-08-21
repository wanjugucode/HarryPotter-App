import { Characters } from "src/app/models/characters";
import { Inter } from "next/font/google";
import 'tailwindcss/tailwind.css';

const inter = Inter({ subsets: ["latin"] });



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
    <div>
      <p className="flex justify-center items-center mt-4">ID: {postId}</p>
     

     <div className="max-w-3xl mx-auto my-3 p-4 mt-20">
       <div className="w-full lg:w-5/6 mx-auto flex flex-col lg:flex-row justify-center items-center border rounded-lg shadow-lg bg-white p-8 ">
         <div className="lg:w-auto w-full bg-cover rounded-t lg:rounded-l text-center overflow-hidden lg:flex lg:flex-col justify-center items-center lg:w-1/3 p-4">
           <img
             src={character.image}
             alt=""
             className="mx-auto w-96 h-96 lg:w-auto lg:h-auto"
           />
         </div>

         <div className="lg:w-2/3 w-full rounded-b lg:rounded-r p-4 lg:flex lg:flex-col justify-center items-center">
           <div className="mb-4 justify-center items-center">
             <div className="text-gray-900 font-bold text-xl mb-1">
                {character.name}
             </div>
             <table className="table-auto border mt-1">
               <tbody>
                 <tr className="border w-[600px]">
                   <td className="border px-2 py-2 text-left">House </td>
                   <td className="border px-2 py-2 text-left">{character.house}</td>
                 </tr>
                 <tr className="border w-[600px]">
                   <td className="border px-2 py-2 text-left">Date Of Birth </td>
                   <td className="border px-2 py-2 text-left">
                   {character.dateOfBirth}
                   </td>
                 </tr>
                 <tr className="border w-[600px]">
                   <td className="border px-2 py-2 text-left">
                     Actor
                   </td>
                   <td className="border px-2 py-2 text-left">{character.actor}</td>
                 </tr>
                 <tr className="border w-[600px]">
                   <td className="border px-2 py-2 text-left">
                    EyeColor
                   </td>
                   <td className="border px-2 py-2 text-left">{character.eyeColour}</td>
                 </tr>
                 <tr className="border w-[600px]">
                   <td className="border px-2 py-2 text-left">
                     HairColor
                   </td>
                   <td className="border px-2 py-2 text-left">{character.hairColour}</td>
                 </tr>
                 <tr className="border w-[600px]">
                   <td className="border px-2 py-2 text-left">
                    Alive
                   </td>
                   <td className="border px-2 py-2 text-left">{character.alive}</td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
       </div>
     </div>
    </div>
  );
};


