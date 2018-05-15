import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film-detail-item',
  templateUrl: './film-detail-item.component.html',
  styleUrls: ['./film-detail-item.component.css']
})
export class FilmDetailItemComponent implements OnInit {
  @Input() objects: any;
  @Input() detail: string;

  ngOnInit() {}
}
