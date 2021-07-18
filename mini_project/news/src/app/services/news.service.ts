import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { HttpClient,HttpHeaders } from '@angular/common/http'
import {AdminService} from 'src/app/services/admin.service'

import {News} from 'src/app/models/news'


const getNews = 'http://localhost:3000/news'

const editNews = 'http://localhost:3000/news/editNews'

const addNews = 'http://localhost:3000/news/addNews'

const deleteNews = 'http://localhost:3000/news/'

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  headers=new HttpHeaders().set('Content-Type','application/json')

  constructor(private http: HttpClient,
    private adminService: AdminService) { }

  getUsersList(): Observable<News[]> {
    return this.http.get<News[]>(getNews, {
      headers: {
        authorization: 'Bearer ' + this.adminService.getUserDetails().token
      }
    })
}

  updateNewsData(data) : Observable<News> {
    return this.http.put<News>(editNews, data, {
      headers: {
        authorization: 'Bearer ' + this.adminService.getUserDetails().token
      }
    });
}

userRegister(details: any): Observable<any> {
  return this.http.post(editNews,details).pipe(map((news) => {
    return news
  }))
}

addNewsData(data) : Observable<News> {
  return this.http.post<News>(addNews, data, {
    headers: {
      authorization: 'Bearer ' + this.adminService.getUserDetails().token
    }
  });
}

deleteNews(id) : Observable<any> {
 
  return this.http.delete(getNews + '/' + id, {
    headers: {
      authorization: 'Bearer ' + this.adminService.getUserDetails().token
    }
  });
}

}