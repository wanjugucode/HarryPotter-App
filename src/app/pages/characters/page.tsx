// pages/characters/[id].tsx
import { GetServerSideProps } from 'next';
import { Characters } from '../../models/characters';

interface CharacterDetailProps {
  character: Characters;
}

const CharacterDetail = ({ character }: CharacterDetailProps) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-4">Character Detail</h1>
      <div className="bg-white p-4 shadow-md rounded-md">
        <h3 className="text-lg font-semibold mb-2">{character.name}</h3>
        <p>Role: {character.role}</p>
        <p>House: {character.house}</p>
        <p>Wand: {character.wand}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<CharacterDetailProps> = async (
  context
) => {
  const { params } = context;
  const response = await fetch(`https://hp-api.onrender.com/api/characters/${params?.id}`);
  const character: Characters = await response.json();

  return {
    props: {
      character,
    },
  };
};

export default CharacterDetail;
