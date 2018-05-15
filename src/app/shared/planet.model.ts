import { Character } from './character.model';
import { Film } from '../films/film.model';

export class Planet {
  public name: string;
  public rotation_period: string;
  public orbital_period: string;
  public diameter: string;
  public climate: string;
  public gravity: string;
  public terrain: string;
  public surface_water: string;
  public population: string;
  public residents: Character[];
  public films: Film[];

  constructor(
    name: string, rotation_period: string, orbital_period:string, 
    diameter:string, climate:string, gravity:string,
    terrain:string, surface_water:string, population:string,
    residents: Character[], films: Film[]
  ) {
    this.name = name;
    this.rotation_period = rotation_period;
    this.orbital_period = orbital_period;
    this.diameter = diameter;
    this.climate = climate;
    this.gravity = gravity;
    this.terrain = terrain;
    this.surface_water = surface_water;
    this.population = population;
    this.residents = residents;
    this.films = films;
  } 
}
