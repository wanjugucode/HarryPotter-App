'use client';
import React, { ChangeEvent, useState, useEffect } from 'react';
import { Characters } from './models/characters';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

export default function FetchAllCharacters() {
  const [searchName, setSearchName] = useState('');
  const [searchHouse, setSearchHouse] = useState('');
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [inputFocused, setInputFocused] = useState(false); // New state for input focus

  useEffect(() => {
    async function fetchCharacters() {
      try {

        const response = await fetch('https://hp-api.onrender.com/api/characters');
        const data: Characters[] = await response.json();
        setCharacters(data);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCharacters();
  }
  , []);
  

  const filteredCharacters = characters.filter((char) => {
    const nameMatches = char.name.toLowerCase().includes(searchName.toLowerCase());
    const houseMatches = char.house.toLowerCase().includes(searchHouse.toLowerCase());
    return nameMatches || houseMatches;
  });

  return (
    <div>
<div className="pt-2 relative mx-auto text-gray-600 flex flex-col items-center justify-center pb-8">
        {/* Search by Name or House */}
        <div className={`relative ${inputFocused ? 'border-black' : 'border-gray-300'} mb-4`}>
          <input
            className={`border-2 h-10 pl-10 pr-5 rounded-lg text-sm focus:outline-none w-full ${inputFocused ? 'border-black' : 'border-gray-300'}`}
            type="search"
            name="search"
            placeholder="Search by Name or House"
            onChange={(e) => {
              const inputValue = e.target.value;
              setSearchName(inputValue);
              setSearchHouse(inputValue);
            }}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)} 
          />
          <div className="absolute top-2 left-2 ">
            <svg
              className={`text-gray-400 h-5 w-5 ${inputFocused ? 'text-black' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4 ">
          {filteredCharacters.map((character) => (
            <div
              key={character.id}
              className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-[8px] mb-4"
            >
              <div className="max-w-sm rounded overflow-hidden w-80 mx-8 border border-gray-300 shadow-lg">
              <Link href={`/posts/${character.id}`}>

                <div className="h-96 flex items-center justify-center">
                  {character.image ? (
                    <img
                      className="w-full h-96"
                      src={character.image}
                      alt=""
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
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
                  <div className="text-black font-bold text-xl mb-2 flex flex-col items-center justify-center">
                    <h4>{character.name}</h4>
                    
                  </div>

                  <p className="text-black text-base flex flex-col items-center justify-center">
                    Date of Birth: {character.dateOfBirth}
                  </p>

                </div>

                
                  <div className="flex flex-col items-center justify-center">
                  <button className="bg-[#1F2B5F] hover:bg-[#2DB0DE] text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-8 shadow-md">
  View Character Info
</button>

                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
