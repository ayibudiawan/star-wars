import { Character } from './character.model';
import { Film } from '../films/film.model';
import { Planet } from './planet.model';

export class Species {
  public name: string;
  public classification: string;
  public designation: string;
  public average_height: string;
  public skin_colors: string;
  public hair_colors: string;
  public eye_colors: string;
  public average_lifespan: string;
  public language: string;
  public homeworld: Planet[];
  public people: Character[];
  public films: Film[];

  constructor(
    name: string, classification: string, designation:string, 
    average_height:string, skin_colors:string, hair_colors:string,
    eye_colors: string, average_lifespan: string, language:string, 
    homeworld: Planet[], people: Character[], films: Film[]
  ) {
    this.name = name;
    this.classification = classification;
    this.designation = designation;
    this.average_height = average_height;
    this.skin_colors = skin_colors;
    this.hair_colors = hair_colors;
    this.eye_colors = eye_colors;
    this.average_lifespan = average_lifespan;
    this.language = language;
    this.homeworld = homeworld;
    this.people = people;
    this.films = films;
  } 
}
