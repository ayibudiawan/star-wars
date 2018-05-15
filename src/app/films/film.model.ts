import { Character } from '../shared/character.model';
import { Planet } from '../shared/planet.model';
import { Starship } from '../shared/starship.model';
import { Vehicle } from '../shared/vehicle.model';
import { Species } from '../shared/species.model';

export class Film {
  public title: string;
  public episode_id: string;
  public opening_crawl: string;
  public director: string;
  public producer: string;
  public release_date: string;
  public characters: Character[];
  public planets: Planet[];
  public starships: Starship[];
  public vehicles: Vehicle[];
  public species: Species[];

  constructor(
    title: string, episode_id: string, opening_crawl:string, 
    director:string, producer:string, release_date:string,
    characters: Character[], planets: Planet[], starships: Starship[], 
    vehicles: Vehicle[], species: Species[] 
  ) {
    this.title = title;
    this.episode_id = episode_id;
    this.opening_crawl = opening_crawl;
    this.director = director;
    this.producer = producer;
    this.release_date = release_date;
    this.characters = characters;
    this.planets = planets;
    this.starships = starships;
    this.vehicles = vehicles;
    this.species = species;
  } 
}
