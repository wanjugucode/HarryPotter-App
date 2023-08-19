export interface Characters {
  id: string;
  name: string;
  dateOfBirth: string;
  house: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  alternate_names: [];
  yearOfBirth: number;
  species: string;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  patronus: string;
  hogwartsStudent: boolean;
  actor: string;
  alternate_actors: [];
  alive: boolean;
  image: string;
}
