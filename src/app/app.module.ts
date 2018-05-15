import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, BrowserXhr } from '@angular/http';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { FilmsComponent } from './films/films.component';
import { FilmStartComponent } from './films/film-start/film-start.component';
import { FilmListComponent } from './films/film-list/film-list.component';
import { FilmItemComponent } from './films/film-list/film-item/film-item.component';
import { FilmDetailComponent } from './films/film-detail/film-detail.component';
import { FilmDetailItemComponent } from './films/film-detail/film-detail-item/film-detail-item.component';
import { FilmService } from './films/film.service';
import { DetailService } from './shared/detail.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent, 
    FilmsComponent,
    FilmStartComponent,  
    FilmListComponent,
    FilmItemComponent, 
    FilmDetailComponent,
    FilmDetailItemComponent
  ],
  imports: [
    BrowserModule,
    NgProgressModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    FilmService, 
    DetailService, 
    {provide: BrowserXhr, useClass: NgProgressBrowserXhr}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
