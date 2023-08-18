import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Characters } from '../models/characters';

interface HomeProps {
  characters: Characters[];
}

const Home = ({ characters }: HomeProps) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-4">All Characters</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or house"
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters?.map(character => (
          <div key={character.id} className="bg-white p-4 shadow-md rounded-md">
            <Link href={`/characters/${character.id}`}>
              <a>
                <h3 className="text-lg font-semibold mb-2">{character.name}</h3>
                <p>Date of Birth: {character.dateOfBirth}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await fetch('https://hp-api.onrender.com/api/characters');
  const characters: Characters[] = await response.json();

  return {
    props: {
      characters,
    },
  };
};

export default Home;
