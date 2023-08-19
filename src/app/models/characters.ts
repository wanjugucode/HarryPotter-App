import { Url } from "url";

export interface Characters{
    filter(arg0: (d: any) => void): unknown;
    id:string;
    name:string;

    dateOfBirth:string;
    house:string;
    wand:{
        wood:string;
        core:string;
        length:number;
    }
    alternate_names:[];
    yearOfBirth:number;
    species:string;
    wizard:boolean;
    ancestry:string;
    eyeColour:string;
    hairColour:string;
    patronus:string
    hogwartsStudent:boolean;
    actor:string;
    alternate_actors:[];
    alive:boolean;
    image:string;
    matches:string;
    title:string;


}