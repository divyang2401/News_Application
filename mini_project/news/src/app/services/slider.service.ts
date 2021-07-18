import { Injectable } from '@angular/core';
import { News } from 'src/app/models/news'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


const apiTopUrl = 'http://localhost:3000/news/top3news'

const apiUrl = 'http://localhost:3000/news'

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http: HttpClient) { }

  getTopNews(): Observable<News[]> {
    return this.http.get<News[]>(apiTopUrl );
  }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(apiUrl );
  }

}
