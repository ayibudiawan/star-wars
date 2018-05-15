import { Planet } from './planet.model';
import { Film } from '../films/film.model';
import { Species } from './species.model';
import { Vehicle } from './vehicle.model';
import { Starship } from './starship.model';

export class Character {
  public name: string;
  public height: string;
  public mass: string;
  public hair_color: string;
  public skin_color: string;
  public eye_color: string;
  public birth_year: string;
  public gender: string;
  public homeworld: Planet[];
  public films: Film[];
  public species: Species[];
  public vehicles: Vehicle[];
  public starships: Starship[];

  constructor(
    name: string, height: string, mass:string, 
    hair_color:string, skin_color:string, eye_color:string,
    birth_year:string, gender:string, homeworld: Planet[],
    films: Film[], species: Species[], vehicles: Vehicle[],
    starships: Starship[] 
   ) {
    this.name = name;
    this.height = height;
    this.mass = mass;
    this.hair_color = hair_color;
    this.skin_color = skin_color;
    this.eye_color = eye_color;
    this.birth_year = birth_year;
    this.gender = gender;
    this.homeworld = homeworld;
    this.films = films;
    this.species = species;
    this.vehicles = vehicles;
    this.starships = starships;
  } 
}
