import { Component } from '@angular/core';
import { FilmService } from './films/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private filmService: FilmService) {}
}
