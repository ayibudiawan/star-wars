import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Film } from '../film.model';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  film: Film;
  id: number;
  public details: any = ["characters", "planets", "starships", "vehicles", "species"]

  constructor(private filmService: FilmService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        if (this.filmService.films.length == 0) {
          this.filmService.getFilms(false);
        }
        const timer = setInterval(() => {
          if (this.filmService.films.length != 0){
            this.film = this.filmService.getObject(this.id);
            clearInterval(timer);
          }
        }, 1000)
      }
    )
  }
}
