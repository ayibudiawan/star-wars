import { Character } from './character.model';
import { Film } from '../films/film.model';

export class Vehicle {
  public name: string;
  public model: string;
  public manufacturer: string;
  public cost_in_credits: string;
  public length: string;
  public max_atmosphering_speed: string;
  public crew: string;
  public passengers: string;
  public cargo_capacity: string;
  public consumables: string;
  public vehicle_class: string;
  public pilots: Character[];
  public films: Film[];

  constructor(
    name: string, model: string, manufacturer:string, 
    cost_in_credits:string, length:string, max_atmosphering_speed:string,
    crew: string, passengers: string, cargo_capacity:string, 
    consumables: string, hyperdrive_rating: string, mglt:string, 
    vehicle_class: string, pilots: Character[], films: Film[]
  ) {
    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
    this.cost_in_credits = cost_in_credits;
    this.length = length;
    this.max_atmosphering_speed = max_atmosphering_speed;
    this.crew = crew;
    this.passengers = passengers;
    this.cargo_capacity = cargo_capacity;
    this.consumables = consumables;
    this.vehicle_class = vehicle_class;
    this.pilots = pilots;
    this.films = films;
  } 
}
