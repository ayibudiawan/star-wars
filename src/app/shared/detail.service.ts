import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DetailService {
  private subject = new Subject<string>();
  constructor(private http: Http){}

  getDetail(url) {
    if (url != null) {
      return new Promise((resolve) => {
        this.http.get(url).subscribe(data => {
          resolve([true, JSON.parse(data["_body"])]);
        }, (err) => {
          resolve([false, []]);
        });
      })
    }
  }
}
