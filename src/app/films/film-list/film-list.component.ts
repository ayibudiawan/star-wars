import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Film } from '../film.model';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit, OnDestroy {
  films: Film[];
  subscription: Subscription;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.subscription = this.filmService.filmsChanged.subscribe(
      (films: Film[]) => {
        this.films = films;
      }
    )
    this.films = this.filmService.getFilms();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
