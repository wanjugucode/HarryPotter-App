"use client";
import React, {useState, useEffect } from "react";
import { Characters } from "./models/characters";
import Link from "next/link";
import "tailwindcss/tailwind.css";

export default function FetchAllCharacters() {
  const [searchName, setSearchName] = useState("");
  const [searchHouse, setSearchHouse] = useState("");
  const [characters, setCharacters] = useState<Characters[]>([]);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch(
          "https://hp-api.onrender.com/api/characters"
        );
        const data: Characters[] = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter((char) => {
    const nameMatches = char.name
      .toLowerCase()
      .includes(searchName.toLowerCase());
    const houseMatches = char.house
      .toLowerCase()
      .includes(searchHouse.toLowerCase());
    return nameMatches && houseMatches;
  });

  return (
    <div>
      <div className="pt-2 relative mx-auto text-gray-600 flex flex-col items-center justify-center pb-8 ">
        {/* Search by Name */}
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search by Name"
          onChange={(e) => setSearchName(e.target.value)}
        />

        {/* Search by House */}
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="searchHouse"
          placeholder="Search by House"
          onChange={(e) => setSearchHouse(e.target.value)}
        />

        <div className="flex flex-wrap -mx-4">
          {filteredCharacters.map((character) => (
            <div
              key={character.id}
              className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-[8px] mb-4"
            >
              <div className="max-w-sm rounded overflow-hidden w-80 mx-8 border border-gray-300">
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
                  <div className="font-bold text-xl mb-2 flex flex-col items-center justify-center">
                    <h3>Name: {character.name}</h3>
                  </div>
                  <p className="text-gray-700 text-base flex flex-col items-center justify-center">
                    Date of Birth: {character.dateOfBirth}
                  </p>
                </div>

                <Link href={`/pages/${character.id}`}>
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
    </div>
  );
}
