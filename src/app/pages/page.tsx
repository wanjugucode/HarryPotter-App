'use client'

import React, { ChangeEvent, useState } from 'react';
import { Characters } from "./models/characters";
import Link from 'next/link';
// import '/styles/globals.css'
import 'tailwindcss/tailwind.css';

export default async function FetchAllCharacters() {

  const [searchChar, setSearchChar]=useState('');
  const [selectedChar, setSelectedChar]=useState('');
  const [suggestedChar,setSuggestedChar]=useState('');

  



const data= await fetch('https://hp-api.onrender.com/api/characters');
    const characters: Characters = await data.json();
    console.log(characters);

  
    
   function FilterCharacters(event:ChangeEvent<HTMLInputElement>) {
    const value=event.target.value;
    setSearchChar(value);
    setSelectedChar('');

    if (value.trim()!==''){
      const matches= data.filter((char)=>
      char.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestedChar(matches)
    }
    else{
      setSuggestedChar([])
    }
}



    
 return(
<div >
<div className="pt-2 relative mx-auto text-gray-600 flex flex-col items-center justify-center  pb-8 ">
        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search"/>
        <button type="submit" className="absolute  top-0 mt-5 mr-4">
        <svg
        className="text-gray-600 h-4 w-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 56.966 56.966"
        style={{ enableBackground: 'new 0 0 56.966 56.966' }}
        xmlSpace="preserve"
        width="512px"
        height="512px"
      >
        <path
          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
        />
      </svg>
        </button>
      </div>


<div className="flex flex-wrap -mx-4">


{/* {data?.map(character => ( */}
{characters.map((character) => (
                <div key={character.id} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-[8px] mb-4" >
                     
                     <div className="max-w-sm rounded overflow-hidden w-80 mx-8 border border-gray-300">
  <div className="h-96 flex items-center justify-center">
    {character.image ? (
      <img
        className="w-full h-96"
        src={character.image}
        alt=""
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
    ) : (
      <img
        className="w-full h-80"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYqXjw6IR_opev4UADLjT8TPcLmWYQsx_YQ&usqp=CAU"
        alt="Avatar"
      />
    )}
  </div>


  <div className="px-6 py-4">
  <div className="font-bold text-xl mb-2 flex flex-col items-center justify-center">
    <h3>Name: {character.name}</h3>

    </div>
    <p className="text-gray-700 text-base flex flex-col items-center justify-center">
    Date of Birth: {character.dateOfBirth}
    </p>
  </div>

 
  <Link href={"/pages/"+character.id}>

  <div className="flex flex-col items-center justify-center">
  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  View Character Info
</button>
  </div>
  </Link>
</div>
</div>

))}
              

           
</div>
</div>
    )

}
