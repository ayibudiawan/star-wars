import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Film } from './film.model';
import { Character } from '../shared/character.model';
import { Planet } from '../shared/planet.model';
import { Species } from '../shared/species.model';
import { Starship } from '../shared/starship.model';
import { Vehicle } from '../shared/vehicle.model';
import { DetailService } from '../shared/detail.service';
import * as _ from 'lodash';

@Injectable()
export class FilmService {
  filmsChanged = new Subject<Film[]>();
  public films: Film[] = [];
  public loaderRun: boolean = false;
  private characters: Character[] = [];
  private planets: Planet[] = [];
  private starships: Starship[] = [];
  private vehicles: Vehicle[] = [];
  private species: Species[] = [];
  private details: any = {"characters": this.characters, "planets": this.planets, "starships": this.starships, "vehicles": this.vehicles, "species": this.species};

  constructor(private http: Http, private detailService: DetailService){}

  setFilms(films: Film[]) {
    this.films = films;
    this.filmsChanged.next(this.films.slice());
  }

  getFilms(loader=true) {
    this.loaderRun = true;
    this.http.get('https://swapi.co/api/films').map(
      (response: Response) => {
        const films: Film[] = _.orderBy(response.json().results, ['episode_id'], ['asc']);
        return films;
      }
    )
    .subscribe(
      (films: Film[]) => {
        this.setFilms(films);
        if (loader){
          this.loaderRun = false;
        }
      }
    );
    return this.films.slice();
  }

  getObject(index){
    this.loaderRun = true;
    let film = this.films[index];
    for (let detail of Object.keys(this.details)) {
      if (!film[detail]) {
        film[detail] = [];
      } else {
        this.details[detail] = [];
        let array_data = this.details[detail];
        let urls = film[detail];
        let url_length = urls.length;
        let index = 0;
        for (let url of urls) {
          this.detailService.getDetail(url).then((res) => {
            if (res[0]) array_data.push(res[1]);
            index += 1;
          })
        }
        const timer = setInterval(() => {
          if (index == url_length){
            film[detail] = [];
            film[detail] = array_data;
            this.loaderRun = false;            
            clearInterval(timer);
          }
        }, 1000)
      }
    }
    return film;
  }
}
